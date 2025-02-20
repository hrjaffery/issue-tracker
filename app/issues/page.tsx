"use client";

import { issue } from "@prisma/client";
import { Button, Flex, Skeleton, Table } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import StatusBadge from "../components/StatusBadge";

const Issues = () => {
  const {
    data: issues,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["issues"],
    queryFn: () => axios.get("/api/issues").then((response) => response.data),
  });

  if (isFetching) return <Skeleton />;
  if (error) return <div>Something went wrong</div>;
  return (
    <div>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created At</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {issues.map((issue: issue) => {
            return (
              <Table.Row key={issue.id}>
                <Table.RowHeaderCell>
                  <Link href={`/issues/${issue.id}`}>{issue.title}</Link>{" "}
                </Table.RowHeaderCell>
                <Table.Cell>
                  <Flex gap="2">
                    <StatusBadge status={issue.status} />
                  </Flex>
                </Table.Cell>
                <Table.Cell>
                  {new Date(issue.createdAt).toDateString()}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>

      <Button mt="4">
        <Link href="./issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default Issues;
