import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(dto: CreatePostDto): Promise<import("./posts.entity").PostEntity>;
    findAll(): Promise<import("./posts.entity").PostEntity[]>;
    findBySlug(slug: string): Promise<import("./posts.entity").PostEntity>;
}
