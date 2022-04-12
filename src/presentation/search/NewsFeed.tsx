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
    generalSearch(search)
      .then((posts: Post[]) => {
        setFeed(posts)
      })
      .catch(err => {
        console.log(err)
      });
  }, []);

  return (
    <Container>
      <Text fontSize="xl" align="center">News Feed</Text>
      <Flex>
        <UnorderedList>
          {feed.map(item => {
            return <ListItem key={item.id}>{item.title}</ListItem>
          })}
        </UnorderedList>
      </Flex>
    </Container>
  );
}