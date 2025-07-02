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
    
    static blogDir = path.join(Dir.grandParentDir, 'assets', 'blog');
    
    static get outputPath() {
        return path.join(Dir.grandParentDir, 'data', `${Date.now()}_List.json`);
    }
}



// // 读取目录内容并写入json（去除扩展名）
// try {
//     // 读取目录内容
//     const files = fs.readdirSync(Dir.blogDir);
//     const names = files.map(f => path.parse(f).name);

//     // 写入数据
//     let data = {};
//     for (const name of names) {
//         // 读取每个文件yaml头部
//         const content = fs.readFileSync(`${Dir.blogDir}/${name}.md`, 'utf8');
//         const md = matter(content)
//         if (md.data.read === undefined){
//             data[name] = {
//                 title: md.data.title || name, // 如果没有title，则使用文件名
//                 description: md.data.description || '该文章没有简介', 
//                 author: md.data.author || '匿名', // 如果没有author，则使用匿名
//                 date: new Date().toISOString().split('T')[0], 
//                 tags: md.data.tags || ["markdown"], // 如果没有tags，则使用空数组
//             }
//             let update = {
//                 read: true // 添加read属性
//             }
//             const updatedContent = matter.stringify(content, update);
//             fs.writeFileSync(blogDir + '/' + name + '.md', updatedContent);
//             // 写入json
//             fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), {encoding:'utf-8', flag:'w'});
//             console.log('List.json generated!');
//             } 
//         else{
//             console.log(`Skipping ${name}.md, it already has a read status.`);
//             }
//         }
//     } 
// catch (err) {
//         console.error('Error reading directory:', err);
//     }           
