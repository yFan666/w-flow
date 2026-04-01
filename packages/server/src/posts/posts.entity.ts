import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index({ unique: true })
  @Column({ length: 120 })
  slug: string;

  @Column({ length: 200 })
  title: string;

  @Column({ type: 'date' })
  date: string;

  @Column({ length: 300 })
  excerpt: string;

  @Column({ type: 'json' })
  tags: string[];

  @Column({ nullable: true, length: 500 })
  cover?: string;

  @Column({ type: 'longtext' })
  contentMd: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
