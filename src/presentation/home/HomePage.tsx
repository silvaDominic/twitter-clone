import { Button, Container, Flex, Input, Text } from "@chakra-ui/react";
import React, { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const searchQuery = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <Container>
      <div style={{marginTop: "30vh"}}>
        <Text fontSize="3xl" align="center">Twitter Clone</Text>
        <form onSubmit={search}>
          <Flex py={15}>
            <Input ref={searchQuery} aria-label="Search" type="text" name="search"
                   placeholder="Search for a user or tag" mr={2}/>
            <Button type="submit" colorScheme='teal' variant='outline'>Search</Button>
          </Flex>
        </form>
      </div>
    </Container>
  )

  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = searchQuery.current?.value;
    if (query) {
      navigate({
        pathname: "search",
        search: `q=${query}`,
      });
    }
  }
}