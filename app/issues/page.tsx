"use client";

import { Button, Skeleton, Table } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { issue } from "@prisma/client";

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
                <Table.RowHeaderCell>{issue.title}</Table.RowHeaderCell>
                <Table.Cell>{issue.status}</Table.Cell>
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
