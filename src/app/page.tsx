import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {routes["/blog"] && (
        <Flex fillWidth gap="24" direction="column">
          <Heading as="h3" paddingX="20">
            JavaScript is a high-level, interpreted programming language primarily 
            used to add interactivity and complex features to websites. It's one of the core 
            technologies of the web, alongside HTML and CSS, 
            and can run in the browser as well as on servers via Node.js.
          </Heading>
          <Flex flex={3} paddingX="20">
            <Posts columns="2" />
          </Flex>
        </Flex>
      )}
    </Column>
  );
}
