import {Button, Container, Flex, Input, Text} from "@chakra-ui/react";
import React, {FormEvent} from "react";
import {ISearchService} from "../../application/search-service.interface";
import {useNavigate} from "react-router-dom";

export function HomePage({generalSearch}: ISearchService) {
    const navigate = useNavigate();

    return (
        <Container>
            <div style={{marginTop: "30vh"}}>
                <Text fontSize="3xl" align="center">Twitter Clone</Text>
                <form onSubmit={search}>
                    <Flex py={15}>
                        <Input placeholder="Search for a user or tag" mr={2}/>
                        <Button type="submit" colorScheme='teal' variant='outline'>Search</Button>
                    </Flex>
                </form>
            </div>
        </Container>
    )

    function search(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        generalSearch()
            .then(res => {
                console.log(res);
                navigate("/search");
            })
            .catch(err => console.log(err));
    }
}