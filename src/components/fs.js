import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

// 返回当前文件的绝对路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDir = path.join(__dirname, '../assets/blog');
const outputPath = path.join(__dirname, '../data/blogList.json');
console.log("blogDir:", blogDir);

// 读取目录内容并写入json（去除扩展名）
try {
    // 读取目录内容
    const files = fs.readdirSync(blogDir);
    const names = files.map(f => path.parse(f).name);

    // 写入数据
    let data = {};
    for (const name of names) {
        // 读取每个文件yaml头部
        const content = fs.readFileSync(`${blogDir}/${name}.md`, 'utf8');
        const md = matter(content)
        console.log(md)
        data[name] = {
            title: md.data.title || name, // 如果没有title，则使用文件名
            description: md.data.description || '该文章没有简介', 
            author: md.data.author || '匿名', // 如果没有author，则使用匿名
            date: new Date().toISOString().split('T')[0], 
            tags: md.data.tags || ["markdown"], // 如果没有tags，则使用空数组
        }
    }
    // 写入json
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), {encoding:'utf-8', flag:'w'});
    console.log('blogList.json generated!');
} catch (err) {
    console.error('Error reading directory:', err);
}