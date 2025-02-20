import prisma from "@/prisma/client";
import IssueForm from "../IssueForm";

const IssueDetailsPage = async ({ params }: { params: { id: string } }) => {
  console.log("🚀 ~ IssueDetailsPage ~ params:", params);
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  return <IssueForm issue={issue} />;
};

export default IssueDetailsPage;
