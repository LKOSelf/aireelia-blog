import path from '../src/components/scripts/path.js'; // 引入路径处理脚本

const note = path.generateNoteInfo(); // 生成笔记信息
const blog = path.generateBlogInfo(); // 生成博客信息
console.log('Note Info:', note);
console.log('Blog Info:', blog);