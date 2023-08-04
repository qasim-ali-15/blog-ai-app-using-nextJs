"use client";
import { FormattedPost } from "@/app/types";
import React, { useState } from "react";

type Props = {
  post: FormattedPost;
};

const Content = ({ post }: Props) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(post.title);

  return <div>Content</div>;
};

export default Content;
