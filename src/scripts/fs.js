import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

// 返回当前文件的绝对路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDir = path.join(__dirname, '../assets/blog');
const outputPath = path.join(__dirname, '../assets/blogList.json');

// 读取目录内容并写入json（去除扩展名）
try {   
    const files = fs.readdirSync(blogDir);
    const names = files.map(f => path.parse(f).name);
    fs.writeFileSync(outputPath, JSON.stringify(names, null, 2), 'utf-8');
    console.log('Directory contents:', names);
    console.log('blogList.json generated!');
} catch (err) {
    console.error('Error reading directory:', err);
}
