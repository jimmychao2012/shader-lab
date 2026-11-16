const cards = document.querySelector('#cards');
const search = document.querySelector('#search');
const filters = document.querySelector('#filters');
const count = document.querySelector('#count');
const dialog = document.querySelector('#detail');
let topics = [];
let activeCategory = '全部';
const icons = {'基礎概念':'◈','Shader':'✦','渲染技術':'◎'};
function element(tag, cls, content){const node=document.createElement(tag);if(cls)node.className=cls;if(content!==undefined)node.textContent=content;return node;}
function renderFilters(){filters.replaceChildren();for(const category of ['全部',...new Set(topics.map(t=>t.category))]){const button=element('button',category===activeCategory?'active':'',category);button.type='button';button.addEventListener('click',()=>{activeCategory=category;renderFilters();renderCards();});filters.append(button);}}
function openTopic(topic){const area=document.querySelector('#detailContent');area.replaceChildren();const meta=element('p','',`${topic.category} · ${topic.level}`);meta.style.color='#a99cff';area.append(meta,element('h2','',topic.title),element('p','',topic.details));dialog.showModal();}
function renderCards(){const query=search.value.trim().toLocaleLowerCase();const shown=topics.filter(t=>(activeCategory==='全部'||t.category===activeCategory)&&[t.title,t.summary,t.details,t.category].some(v=>v.toLocaleLowerCase().includes(query)));cards.replaceChildren();count.textContent=`/ ${shown.length} TOPICS`;if(!shown.length){cards.append(element('p','empty','找不到符合條件的主題，試試其他關鍵字。'));return;}for(const topic of shown){const card=element('button','card');card.type='button';card.append(element('div','symbol',icons[topic.category]||'◇'),element('h3','',topic.title),element('p','',topic.summary));const tags=element('div');tags.append(element('span','tag',topic.category),element('span','tag',topic.level));card.append(tags);card.addEventListener('click',()=>openTopic(topic));cards.append(card);}}
async function init(){try{const response=await fetch('./data/topics.json');if(!response.ok)throw new Error(`HTTP ${response.status}`);const data=await response.json();if(!Array.isArray(data))throw new Error('資料格式錯誤');topics=data;renderFilters();renderCards();}catch(error){cards.append(element('p','empty','無法載入知識資料。請透過本地 HTTP 伺服器或 GitHub Pages 開啟網站。'));console.error(error);}}
search.addEventListener('input',renderCards);
document.querySelector('#close').addEventListener('click',()=>dialog.close());
const hue=document.querySelector('#hue');hue.addEventListener('input',()=>{document.querySelector('#hueValue').textContent=`${hue.value}°`;document.querySelector('#demoOrb').style.filter=`hue-rotate(${Number(hue.value)-250}deg)`;});
init();
