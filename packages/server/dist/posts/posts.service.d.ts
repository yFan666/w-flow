import { PostEntity } from './posts.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
export declare class PostsService {
    private readonly repo;
    constructor(repo: Repository<PostEntity>);
    create(dto: CreatePostDto): Promise<PostEntity>;
    findAll(): Promise<PostEntity[]>;
    findBySlug(slug: string): Promise<PostEntity>;
}
