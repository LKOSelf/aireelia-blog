import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export class Dir {
    // 获取当前文件的绝对路径
    static __filename = fileURLToPath(import.meta.url);
    static __dirname = path.dirname(Dir.__filename);
    
    // 跳一级到父目录
    static parentDir = path.dirname(Dir.__dirname);
    
    // 跳两级到祖父目录
    static grandParentDir = path.dirname(Dir.parentDir);
}

export function generateBlogInfo() {

// 读取目录内容并写入json（去除扩展名）

    const blogDir = path.join(Dir.grandParentDir, 'assets', 'blog');
    const outputPath = path.join(Dir.grandParentDir, 'data', `blogInfo.json`);

    // 读取目录内容
    const files = fs.readdirSync(blogDir);
    const names = files.map(f => path.parse(f).name);

    // 写入数据
    let data = {};
    for (const name of names) {
        console.log(`Processing ${name}.md...`);
        // 读取每个文件yaml头部
        const content = fs.readFileSync(`${blogDir}/${name}.md`, 'utf8');
        const md = matter(content)
        data[name] = {
            title: md.data.title || name,
            description: md.data.description || '该文章没有简介',
            author: md.data.author || '匿名',
            date: new Date().toISOString().split('T')[0],
            tags: md.data.tags || ["markdown"],
        }

    }
    // 写入json
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), {encoding:'utf-8', flag:'w'});
    console.log('List.json generated!');
}

export function generateNoteInfo() {
    const file = fs.readdirSync(`${Dir.grandParentDir}/assets/note`)
    console.log(file)
    const outputPath = path.join(Dir.grandParentDir, 'data', `noteInfo.json`);
    let data = {};
    for(const name of file){
        data[name] = {
            dirname: name,
        }
    }
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), {encoding:'utf-8', flag:'w'});
}