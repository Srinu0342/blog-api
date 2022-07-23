import { Post } from './post.entity';
import { POST_REPOSITORY } from '../../core/constants/dbConstants';

export const postsProviders = [
  {
    provide: POST_REPOSITORY,
    useValue: Post,
  },
];
