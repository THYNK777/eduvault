import type { Project, User } from './types';

export const mockUsers: User[] = [
  {
    id: 'user-1',
    name: 'Nitin Gadkari',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['Python', 'PyTorch', 'Natural Language Processing', 'Generative Models'],
  },
  {
    id: 'user-2',
    name: 'Steve Jobs',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['JavaScript', 'React', 'Node.js', 'System Design'],
  },
  {
    id: 'user-3',
    name: 'Sundar Pichai',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['C++', 'Unreal Engine', 'Computer Graphics', 'Game Physics'],
  },
  {
    id: 'user-4',
    name: 'Ankur Warikoo',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['Growth Hacking', 'Public Speaking', 'Content Creation', 'Startups'],
  }
];

export const mockProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Nitin Gadkari – “Innovation Overcomes All Roads”',
    description: '“Dream big, build bigger — even the impossible becomes a highway with enough will.” — Inspired by Nitin Gadkari',
    field: 'Divination',
    tags: ['AI', 'hydrogen vehicles', 'Social Media', 'Predictive Analytics'],
    ownerId: 'user-1',
    teamIds: ['user-1'],
    isComplete: false,
    mainContent: 'India’s greatest projects didn’t begin with money — they began with courage. You don’t wait for the perfect time. You begin with what you have. I’ve seen highways built where there were none, and progress where there was resistance. The same applies to your ideas. If you have a half-finished plan, don’t abandon it. Revive it. Innovate it. And remember — sometimes the best roads are the ones you build yourself.\n\n— Nitin Gadkari, Minister of Road Transport & Highways',
    imageUrl: 'data:image/jpeg;base64,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',
    imageHint: 'Nitin Gadkari',
  },
  {
    id: 'proj-2',
    title: 'Steve Jobs – “The Dots Will Connect”',
    description: `💡 "What feels like a mess today may become your masterpiece tomorrow — don’t quit on your dots."`,
    field: 'Potions',
    tags: ['Biochemistry', 'Synthetic Biology', 'CRISPR', 'Metabolic Engineering'],
    ownerId: 'user-2',
    teamIds: ['user-2', 'user-3'],
    isComplete: false,
    mainContent: `You can’t connect the dots looking forward — only looking back. It’s tempting to dismiss that old research draft, that half-coded app, or the notebook full of scattered thoughts. But these fragments carry more weight than we realize. Every incomplete idea is a seed — sometimes it just needs time, perspective, or the right people to help it grow.

When Steve Jobs dropped out of college, learned calligraphy, and tinkered with design — none of it made sense then. But years later, those dots became the aesthetic soul of Apple. What you create today may feel pointless. But in hindsight, it might be the very moment your future self is grateful for.

So don’t be afraid of the unfinished. Embrace the mess. Trust your instincts. Keep building. Because masterpieces are often born out of abandoned drafts — brought back to life by someone who refused to let them die.`,
    imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBDgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xAA+EAACAQMCAwUFBQcEAQUAAAABAgMABBEFIRIxQQYTIlFhFDJxgZEjQqGxwQcVJFJy0fAzNOHxJUNigoOS/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJELcdSRTcMmKFWUNsCDUig5zigeWs3hG4pJ2xfNocVPHP3fPlSntJdrLb8C7k7bUFehiYoG6AVOo7lSyAFvy9a9gCywquWCjA8PU1OkQuJ+6tg25CA+nUmg1sLOTU+NyjlRsDnnVjtNDhtUDNGvE2Pu7mrBpGnR29okYjAIApi1oGH3fT60FcW2UScXQeEfrTDTrEEMZAVZm2PPNMPZOA8KoDxbE02hswsK45ryoEU2nNGrDG2R8P8AP7UEthgmOeJXibmpGR9Kufs4IHFvUb2kP8tBx/tp2Gligl1HRxI8YGXtjuV9V8x6VzF+IN4uYr6oeHhTFct/aN2IQiTVNKiA5tLAi8iTuw/UUCvsnvo4/pNA6kPBTbsxC0GkcJG/Cc0n1bPAcc80Htl/pD4UUnvCl9gW4RxeVHjPEDQWG3/2y1Lnaobc/wAMtTDkKDbnGRQbQ0ZnCVA0i594fWg0jPd1KbmomkWtcDzoPZH4zWofh2qQAeYqORc8qCKSXzpdc37pkRDaibpWVCTQUEQkfDcqArTb6V8BhjFWi2uIni4X54pJBp6BQUrJ2li93O1A+1DHsbheXDXKtVjxdOa6TC5lsWycnhqi6pbkzNsaBTGvHgetWHTrFXizw0mVBGwzt8asGk3GEIz0oCbW5cvT2zfjG5qkwXhV8g7U1ttVKEDNA+ukbJKH5VXNULy3AjU5f06UbJqoMbEkHG9IraeaSd5tiWJGGoDgBBao/GTw8uHnmm/ZBFlvTMF8PpmkXtLGZY22DbKzDPF6Z6VYezV53F0IiGIPzx86C/wtwqox0qfjBoJX4sEdKk7zBoGMHCxAbpTWHgI5jFV+ObG4NFQ3W29A2kKj3TmoC1Bd6WzgmpA+RtQSOdvSg50D5VgCDsQaL5qBWjx9RigoWr6X+7nkWFfsJMtHjp5iqZcxiUmuxX1mlxCyOobbIz51zPXLMWd26YZTn3SKBRFAqL61IOYFe16Bmgd23+3WiD7ooS0f7IA0UdlyaDyY/YEilRZs86ZzH7E0qJ3oJFc1sJDUS1sBQFRyA9a2Jydqjt04uVEGDCk0C++YAGlkV0Fk2qXVSycW9IRIwJ3O9BbIdUAUDIrWe+DZJO1VtWc9TUy8ZU70F101xJZkjkVpFfQKZDTbQN7AAc8UtvtpsUFd1GMIRijdHOVbPlQ2p74+NT6T7hxQL1+NYGOedQh68MgoDLuQR2rMBnblXunxoyCNnK+Zz+VDycU1uQh3PhG/MnajYISqBweeCNuvWgI4yE4XjEipuu35f550fo10ltfoHfwSYxhTgUN3Dd4yAqWJU4O2cg8vpU1payjxOucbsD15/TlQdAiuQQCD4aL7wMARVdtTKEEbZI5jPQUxgnzsTy2oGiEnlUsZOetCwSDOeYo2FlJ5YoDLYcS46+tEolDI6pXpvQU4Rz86Ao+HqK0L8xQEt6uCc0Fc6l3aMScEDrQNHkUlgWwAN6pPbn2SdBNEw79PfCnIYf3pXrXaqe6v/YrOdYIEUyT3DcokXmx+eAPMkAc6B0250u4v0tpTcKznhTv0IZierZ/TagCVgygrvW2eVM47KN4SrqEljcox8iDigZoHglaKT3lOM9DQGWr7AUeT4AM0kgk4XpkkuVoJpf8ARNLDzpiTxQ0FwUGq17nfFe8OKmtoAzZNAZp8JK74oyWPhQ5HSstwFFa3c44CM9KCpa0ftGFI+HfPlTXV5A0pNKyedATCAVqUAYOKGgkAWpeMEHegt3Z0g2Q+dLtSYCc/GjezOWstvWkmsykXJFAu1E8R2ovR18B+FK5WLmm2k7RknyoK0WK1oZcdaKeD41A0G+AKBx2fthf28igNxRNlmztvyppJalpIBjIJy30GfxpT2XuDZagqlSUlIB8WFHqR1/5q5xQJJO4x4l24D8P1oIRblDAyIcAAFcZypBwPjnNFtEpt8KPATsD5Eb0dLA1rbqgGQSAd/Q/3pNc3TQd6nvJ93HTn+n5UDSawkEiFGO4JB/SndnGc8TDIPnQMbZQCN6PF1DEo4nVd8b0okfuzw8WC2w/SkWrXLyIsEEn2pcIrOduMnAA+dBdJ9Rs44+8klXg8ydqrepdsdNgbhhlMjeSDNVbWtWWe6NjbPNPHD9kpXddvvEDBJJ38hnHTFQt2ZvO9Q20nEhALs/hAzzA86C422vtf3CxwgjzzT/AFSxa90ScKsiSNGeBwv3sVRdKsZtDlme54pAVxmMZx8B/mPWuodnLpZtNtkCCNygIXO+eu/xzQcp7PaNdxaWzGXubq6uPtmxkmNF2XfzZyfiinpV1h0i1u3jku4kluUVVVubLj1plfaVBDeSTxqVSU/aKvLO34bD50ZbRJEAEAA57CgqPaDT/ZL0zqWVLrfiUkEP1B/Okl4eNo3PHkqQS7BmOGI3OBnlXQ9Wsv3hbPAo8bEFDyw3xrnd4ojnaJSSsXgB88cz8zmgAZ+GWjIpfDSy5JEoqVJcAb0DiKTwVsBmgLaXOKYxkECg14CaNtgBzqNVWt+IDlQEM2AcUuuy5DYogyZrxwpU0FM1IOrnIzQJDHkFWDUo17w5xQbv0oFqK4HKpVV6OEaVmVXyoLT2RT/wAfvz3pJq8Ia8J+NPOy0g9jwMczSHXGZLs48zQCLAnUCiYMRgqOVAM742qMzuu1BCZU8xQ8kqUt78+tRtOSd6B9ZMpcNtkVfOzbe06g80xBj4c8ZHlXK7SdlbY1Z9Mnnu9J1CCKUpIEDDBxkeVB0LUtNuNVikfTNVgM8Zw6yjbPUbHaqLqI1PS1MWqWrK5YAd3llbfofLfrRNl2UvorK2u9Lu5IL10DFg+M+m9Fx6heSZtNUQG5QgPEcEHfmKAfQb5pQT7LcuwOPCnOrJDq6YAls7xP/AKqF06P2ORhCVEZHEuBvjyNNllVkw+5HMnqcc6CC6v4pbZzEkjlRkrwb/gaRxaRdX+pRajcd8lrZssqx8DAsQc53A5VZreKPvlkYDi6E9Ka21+4PCMveDzoK/pfZqKxi/h7VyTu3GQDn5c6ZjTOMAPwhRyVdgKa+3RnwLD4RsAOWK2cjGVXHx5UCJ7WOJgoXIBzjzoiINAqhDgg+dE3arDC0iEFgclj+Q+dLba3up8TyzrwnOBj9aC0wn2624Wxx+nWlUs5tJzCw4s7jDChrV5rWUFpl4c9aM1YWWp2/cMw4x4lKtgg+hFBut0DEcY35b1RO0Fv3Oqz/AMsnjHzoqd77TplaN+/teMK38y58/wC9T9pocxQTgAHJBxz33H60FKvdnqJWwBUuoAmYKOZOAMZ3o+87MazZWHt1zYSJb4yWyPCPUdKAW2k8QpvG2wpBbkiQCncXuCgLWSs4yaiVakVaDCWrWRmCmpsVHKvgPwoKzqkzBs560CJyetF6sMN86AI8NBubgjmaieZm5GonzWkfvUF57FyfwpDHfJoDtAR7Tn1qbsgSEcDzND9ocd/86BUF4q2Cb1vCM4qbgoLwr2KeL2W1HokVeS3VlyjtY1HmwGB+FK2aSTm30NeLaGRckZ9SaBibyBRskHyAqFdQjkz4Yv8A8UCy28YIZhxeQ3rEktxuCT/8aAx7xByCDz4V3plpuuRxMEnYEEY42HKkEkseOWR6CohOoPCwIXzxtQW/Vr3TpIFijlTv2I7s8yTQVtKhQEnhZQNqq2rQxxxQ3kICvC4bYcx1phDcFn4lUujAN5fjQPuDiVyOLi6MOX/deDqvl1HUUAl8UcxGVQTjKAbVst8iyIV2b3VUj8/zoCbu2VnEiHEY33UYb/MVOgZ4WWHfPT0qMyJLCUDA+IgZP0oQ3XcSKArEg8T46Y3/ACz/AJyAfU5NRl4IdOTEhJBLD3R0J9aHsezVzK2dR1CQ9eGIcII8iefTzqyW13FPNxqU22PpU832gIXhPTIPKghtbTS9GhzEiIQMDIyzfEnc0JqGsPMEEJ4Qc7A7/hUd7pklycjizjpmoI9IWK3RWbLE4BVshaBzoKOWJbJJ86sepu3sMdtGMSyHhpR2fiabxJxFRgBmGM7U3hiae+4m3CbA0E0MBtbYydDWulxhMOOu/wCNFaicqkQ670QkSxQjbfzoKX2h1cW3ai1hJ2aNj+IH6UT2gthf6QlzECZLc8R9UPP+9UHWtTWXthcSFiyJN3aZ5ADb866poKmexMgwU5EHrQc35jzrWug9ptLsrjRDJYWqR3EAB4UXBK9R61z7iX+YfWg9BrGbwmtGljHNq8M0RBAbPzoK3rEmN/WlsU21NdVt2mOEoKHTZz5UHhlyK0L5o1dKnI6Vn7ouOlAz7Me+9Q9ojib5017L6TNxvxsBWvaHRpXkYAg70FYikxRUclb/ALonB5VummTjbagtJslgVpHyfQUvleSZ2w3Co5AUfJKynAzwjzHKhpREzFiMH0NAJIm64PxqRY8Dw7/KvSEzzYfOvVAJwHbFBDJGxqN4mGx5GiigByXbFausW5wx+JoIp1jaEx5ySMClscj23BAzMIzspP5Ue78CMygjAznFJtIuheGe3u595TxRO33DQM5rxg+7KXzs/M+lRtqSCaMSBWVRuOnLn+NCOphZobmPgwfC7LxdeYOKCv7GZFZ0Rn/qPT8qCyprPNo1RjsuFz4WOMZ+VR3vfXsRdDwKpzgDlsM/lVLiuLi1IMbuhBzgDbNOdO7SCFVW6j4wDzHP/nnQWHTJ3tyROV28JwTmrBa3wlZcSgR8+Hn8PlVGu9UjuQZI1MbEEcWeZ9fSidK11bZRGyrxHJU4Ayf7frmg6CWHdqQ4I5nHXnQOoyrG6sHBAJH1HT6VW4+1MHdDDeP3VDn3fXb4V5ptxcapfQNGn8OrjvH3AI2NB1HQ4fZtOWR/CSuSPKj7QAKzA8250DNMTbwR4w7gA79KLkkFtaBBuzcqCSJ1uLgyE+EbA15rd4lpYvITgKp3rNPT7PPSq12+uP8Aw86BsZwg+ZoOb2emPfaq9srHv3lJDepPOu36RCLDT44FPhjABJ64qg/s30iWa4fU588Cr3MYx756t8htVy1y6/d2nyyE42wFPrQKrPWln1O5jQgqkzKQTtVF7W6Pc2WuTC0ci2lxJGPQ/d+uaYxfZ6wlwjhVuEBYY+8Nj+GKt2p2S6joyyRgPNbjiQjmV6ig5T7BfNzc1uNPvAPfNWkRjONvpW3AOE8vpQUm4M9t7+9aRag3kKY6+ML0xVfiYLQOV1VkHSpE1kk8gflSgtkcq1B35bUFw0fWHLsEAFeahqsqytxgEZpZoZCyEedb6wcyNQStrC4zha1Gsj0+lJeZx0rMAGguRLnmzVo6uDupPrRLLGT4h+FeSKEBIQEDfegDkDrzRt/SteM9Ac/01l3d2MQDNcxjzHFype/aDT4ScZk/pWgPdmAHL8q8dCSBjOf/AHCkk3auNciKyYr5l8VtF2ot508Vs6FRnfByaAq6ZEBWSRURgQcnnVHuQYbl1jfKq3hPmOlGapdXGoScbMMD3UAxilUjuDiRSCKB9adpJViWG9j75V5NnxD/AIpxa3+mXq8AlCE8lk2P1qjBxW3hbnQWvVdKdYzJGCV6Y34v0pA0ixLwyIUb12oeNpoR9hK8ef5GIrWSed2zI3H6tufrQEJdFW4hzrfeY5Zjjc89+dAd6w+6K29occsUFm0u0gaWIlVJDAnJziuhaCqG7hgQDBJfhA2AArjqalcoeKNgjeYFdF/ZKlze6jfX11I0gRViVidgeZx+FB1ApxXUeeirUVO2OK4hU8gM1JbRZYyHmxx8qxwJLrY+6BQSTytb254cYqm9pbaXV76x05GwrsZZW/lRef5irffKWiCnlmlthYfx09zJ77ju1B6KN/8APhQNNPhhs7WKGFeFFUBQOgFVf9od0ZLAxQHLoe8KeYFWoL3aMzEbDn5VzTXrxn1GSVjlD4dvKgTWepXUqR8UKKImySPe+Ga6N2dvu+iVQD8apOjoszSQOBjBBI65pz2YuWhlaBs5jbhIoCdTs2tb2WMrhSeIfA0IV8Jqza7bPPaJdKCSnPHMg0gZNqCoa/FlTVbMBwMVbddGBSEDiUUA0cJxW3dGiwoxWpWgL04cBz1rNRfjY+dRK5jAIrWZ+P6UAqjepAnEdqxIzzou3iznagm1XW7yKZooSkYA94Lv+NI57m4uM99NI22d2rKygGRFlHGQAeWwrSZFRcgb1lZQD4DHevH8sbA5rKyg9hclzk1OVV0JYA71lZQBy28RGeGgGHDIyjkKysoPY3bOM0SVGKysoIWAqM1lZQeHZSa+ieyKIvZ20aONI8woOFBgcq9rKCz4C8ugqKxUHxn3mJzXtZQSX6govxqCD/1PSsrKAXXpHj0idkODw1zTUd4RnzrKygj02Rlul4TirBZwq10csrGQglTjNeVlBftKbvLQq+CMH51VdQiSG7uIoxhEbavaygp2v8AKkMXuisrKCTpWvWsrKDJ9kqKI551lZQGwKOKmMSKByrKyg//2Q==',
    imageHint: 'Steve Jobs',
  },
  {
    id: 'proj-3',
    title: 'Sundar Pichai – “Ideas Need Patience, Not Perfection”',
    description: 'An exploration into quantum entanglement for instantaneous, secure data transfer between research labs.',
    field: 'Charms',
    tags: ['Quantum Computing', 'Cryptography', 'Qiskit', 'Hardware'],
    ownerId: 'user-3',
    teamIds: ['user-3', 'user-4'],
    isComplete: false,
    mainContent: 'The most transformative ideas don’t emerge fully formed. They evolve — quietly, patiently, iteratively. Google itself began as a research project. What mattered wasn’t just brilliance, but belief. If your project feels incomplete, it doesn’t mean it’s unworthy. Keep nurturing it, brick by brick. Sometimes, the world catches up to your vision — not the other way around.\n\n— Sundar Pichai, CEO of Alphabet Inc.',
    imageUrl: 'data:image/jpeg;base64,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',
    imageHint: 'Sundar Pichai',
  },
  {
    id: 'proj-4',
    title: 'Ancient Runes Translation Engine',
    description: 'A machine learning model to translate ancient and forgotten languages using transformer architecture and transfer learning.',
    field: 'Runes',
    tags: ['Machine Learning', 'NLP', 'TensorFlow', 'LLM'],
    ownerId: 'user-2',
    teamIds: ['user-2', 'user-1'],
    isComplete: false,
    mainContent: 'This project includes a scraped dataset of runic inscriptions and a partially trained BERT model. The model struggles with context and ambiguous symbols. The unfinished Jupyter notebook contains data preprocessing steps and model training code.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ancient runes',
  },
  {
    id: 'proj-5',
    title: 'Automated Mandrake Re-potting System',
    description: 'A robotics project to design a system that can safely and automatically re-pot screaming Mandrakes when they mature.',
    field: 'Herbology',
    tags: ['Data Science', 'Robotics', 'Computer Vision', 'Pandas'],
    ownerId: 'user-3',
    teamIds: ['user-3'],
    isComplete: true,
    mainContent: 'The system uses a custom-trained YOLOv5 model to detect mandrake maturity based on leaf patterns. A robotic arm then performs the re-potting procedure. This vault contains the dataset, trained model weights, and control software.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'robotic arm plant',
  },
  {
    id: 'proj-6',
    title: 'The Goblet of Sorting',
    description: 'A web application that sorts new students into collaborative project groups based on their skills and project interests.',
    field: 'Transfiguration',
    tags: ['Software Dev', 'React', 'Firebase', 'Matching Algorithm'],
    ownerId: 'user-2',
    teamIds: ['user-2', 'user-3'],
    isComplete: false,
    mainContent: 'The frontend is built with Next.js and Tailwind CSS. The backend uses Firebase for authentication and data storage. The core matching algorithm is incomplete and needs refinement to handle complex skillsets and preferences.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'fantasy goblet',
  }
];
