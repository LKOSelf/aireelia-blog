import {marked} from 'marked';
import {Dir} from './path.js';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import pinyinModule from 'pinyin';
const pinyin = pinyinModule.default || pinyinModule;

// 将中文转为拼音首字母缩写
function getAbbr(str) {
    // 取每个字的首字母
    return pinyin(str, { style: pinyin.STYLE_FIRST_LETTER })
        .flat()
        .join('')
        .toUpperCase(); // 可选：转大写
}

export function renderMarkdown(content) {
    return marked.parse(content, {
        gfm: true,
        breaks: true,
        headerIds: false,
        mangle: false,
    });
}

export function noteToHtml() {
    // 获取路径
    const rootDir = `${Dir.grandParentDir}/assets/note/`;
    const fileDir = fs.readdirSync(rootDir).filter(name => !name.startsWith('.'));

    // 读取每个目录下的md文件
    for (const file of fileDir) {
        
        // 独立渲染每个md文件
        const mdPath = fs.readdirSync(`${rootDir}${file}`)
        for (const md of mdPath) {
            const mdFile = fs.readFileSync(`${rootDir}${file}/${md}`, 'utf8')
            const mdName = path.parse(md).name;
            const fileName =  getAbbr(file)
            // 获取md文档内容
            const mdContent = matter(mdFile)
            const mdHtml = renderMarkdown(mdContent.content)
            // 将md写入为html
            fs.writeFileSync(`${rootDir}/.html/${fileName}_${mdName}.html`,mdHtml,'utf-8')
        }
    }
}
