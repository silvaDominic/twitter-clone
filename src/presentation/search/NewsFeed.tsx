import { Container, Flex, Text, ListItem, UnorderedList } from '@chakra-ui/react';
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { ISearchService } from "../../application/search-service.interface";
import { Post } from '../../application/post.interface';


export function NewsFeed({generalSearch}: ISearchService) {
  const {search} = useLocation();
  const [feed, setFeed] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch Posts
    let isMounted = true
    generalSearch(search)
      .then((posts: Post[]) => {
        if (isMounted) {
          setFeed(posts)
        }
      })
      .catch(err => {
          console.log(err)
      });

    return () => {
      isMounted = false
    };
  }, []);

  return (
    <Container>
      <Text fontSize="xl" align="center">News Feed</Text>
      <Flex>
        {
          feed.length > 0
            ?
            <UnorderedList>
              {feed.map(item => {
                return <ListItem key={item.id}>{item.title}</ListItem>
              })}
            </UnorderedList>
            :
            <Text fontSize="xl" align="center">No results</Text>
        }
      </Flex>
    </Container>
  );
}