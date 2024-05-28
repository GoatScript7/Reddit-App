export type Post = {
  id: string;
  userProfileImage: string;
  redditUsername: string;
  promotedUsername: string;
  title: string;
  body: string;
  imageUrl: string;
  likesCount: number;
  commentsCount: number;
};

export type PostCardComponentProps = {
  userProfileImage: string;
  redditUsername: string;
  // promotedUsername: string;
  title: string;
  body: string;
  imageUrl: string;
  likesCount: number;
  commentsCount: number;
};
