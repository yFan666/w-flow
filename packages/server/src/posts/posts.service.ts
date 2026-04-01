import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './posts.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly repo: Repository<PostEntity>,
  ) {}

  async create(dto: CreatePostDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  async findAll() {
    return this.repo.find({
      order: { date: 'DESC', createdAt: 'DESC' },
      select: ['id', 'slug', 'title', 'date', 'excerpt', 'tags', 'cover'],
    });
  }

  async findBySlug(slug: string) {
    const post = await this.repo.findOne({ where: { slug } });
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }
}
