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
    imageUrl: 'https://www.bjp.org/files/inline-images/2.jpg',
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
    imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBDgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xAA+EAACAQMCAwUFBQcEAQUAAAABAgMABBEFIRIxQQYTIlFhFDJxgZEjQqGxwQcVJFJy0fAzNOHxJUNigoOS/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJELcdSRTcMmKFWUNsCDUig5zigeWs3hG4pJ2xfNocVPHP3fPlSntJdrLb8C7k7bUFehiYoG6AVOo7lSyAFvy9a9gCywquWCjA8PU1OkQuJ+6tg25CA+nUmg1sLOTU+NyjlRsDnnVjtNDhtUDNGvE2Pu7mrBpGnR29okYjAIApi1oGH3fT60FcW2UScXQeEfrTDTrEEMZAVZm2PPNMPZOA8KoDxbE02hswsK45ryoEU2nNGrDG2R8P8AP7UEthgmOeJXibmpGR9Kufs4IHFvUb2kP8tBx/tp2Gligl1HRxI8YGXtjuV9V8x6VzF+IN4uYr6oeHhTFct/aN2IQiTVNKiA5tLAi8iTuw/UUCvsnvo4/pNA6kPBTbsxC0GkcJG/Cc0n1bPAcc80Htl/pD4UUnvCl9gW4RxeVHjPEDQWG3/2y1Lnaobc/wAMtTDkKDbnGRQbQ0ZnCVA0i594fWg0jPd1KbmomkWtcDzoPZH4zWofh2qQAeYqORc8qCKSXzpdc37pkRDaibpWVCTQUEQkfDcqArTb6V8BhjFWi2uIni4X54pJBp6BQUrJ2li93O1A+1DHsbheXDXKtVjxdOa6TC5lsWycnhqi6pbkzNsaBTGvHgetWHTrFXizw0mVBGwzt8asGk3GEIz0oCbW5cvT2zfjG5qkwXhV8g7U1ttVKEDNA+ukbJKH5VXNULy3AjU5f06UbJqoMbEkHG9IraeaSd5tiWJGGoDgBBao/GTw8uHnmm/ZBFlvTMF8PpmkXtLGZY22DbKzDPF6Z6VYezV53F0IiGIPzx86C/wtwqox0qfjBoJX4sEdKk7zBoGMHCxAbpTWHgI5jFV+ObG4NFQ3W29A2kKj3TmoC1Bd6WzgmpA+RtQSOdvSg50D5VgCDsQaL5qBWjx9RigoWr6X+7nkWFfsJMtHjp5iqZcxiUmuxX1mlxCyOobbIz51zPXLMWd26YZTn3SKBRFAqL61IOYFe16Bmgd23+3WiD7ooS0f7IA0UdlyaDyY/YEilRZs86ZzH7E0qJ3oJFc1sJDUS1sBQFRyA9a2Jydqjt04uVEGDCk0C++YAGlkV0Fk2qXVSycW9IRIwJ3O9BbIdUAUDIrWe+DZJO1VtWc9TUy8ZU70F101xJZkjkVpFfQKZDTbQN7AAc8UtvtpsUFd1GMIRijdHOVbPlQ2p74+NT6T7hxQL1+NYGOedQh68MgoDLuQR2rMBnblXunxoyCNnK+Zz+VDycU1uQh3PhG/MnajYISqBweeCNuvWgI4yE4XjEipuu35f550fo10ltfoHfwSYxhTgUN3Dd4yAqWJU4O2cg8vpU1payjxOucbsD15/TlQdAiuQQCD4aL7wMARVdtTKEEbZI5jPQUxgnzsTy2oGiEnlUsZOetCwSDOeYo2FlJ5YoDLYcS46+tEolDI6pXpvQU4Rz86Ao+HqK0L8xQEt6uCc0Fc6l3aMScEDrQNHkUlgWwAN6pPbn2SdBNEw79PfCnIYf3pXrXaqe6v/YrOdYIEUyT3DcokXmx+eAPMkAc6B0250u4v0tpTcKznhTv0IZierZ/TagCVgygrvW2eVM47KN4SrqEljcox8iDigZoHglaKT3lOM9DQGWr7AUeT4AM0kgk4XpkkuVoJpf8ARNLDzpiTxQ0FwUGq17nfFe8OKmtoAzZNAZp8JK74oyWPhQ5HSstwFFa3c44CM9KCpa0ftGFI+HfPlTXV5A0pNKyedATCAVqUAYOKGgkAWpeMEHegt3Z0g2Q+dLtSYCc/GjezOWstvWkmsykXJFAu1E8R2ovR18B+FK5WLmm2k7RknyoK0WK1oZcdaKeD41A0G+AKBx2fthf28igNxRNlmztvyppJalpIBjIJy30GfxpT2XuDZagqlSUlIB8WFHqR1/5q5xQJJO4x4l24D8P1oIRblDAyIcAAFcZypBwPjnNFtEpt8KPATsD5Eb0dLA1rbqgGQSAd/Q/3pNc3TQd6nvJ93HTn+n5UDSawkEiFGO4JB/SndnGc8TDIPnQMbZQCN6PF1DEo4nVd8b0okfuzw8WC2w/SkWrXLyIsEEn2pcIrOduMnAA+dBdJ9Rs44+8klXg8ydqrepdsdNgbhhlMjeSDNVbWtWWe6NjbPNPHD9kpXddvvEDBJJ38hnHTFQt2ZvO9Q20nEhALs/hAzzA86C422vtf3CxwgjzzT/AFSxa90ScKsiSNGeBwv3sVRdKsZtDlme54pAVxmMZx8B/mPWuodnLpZtNtkCCNygIXO+eu/xzQcp7PaNdxaWzGXubq6uPtmxkmNF2XfzZyfiinpV1h0i1u3jku4kluUVVVubLj1plfaVBDeSTxqVSU/aKvLO34bD50ZbRJEAEAA57CgqPaDT/ZL0zqWVLrfiUkEP1B/Okl4eNo3PHkqQS7BmOGI3OBnlXQ9Wsv3hbPAo8bEFDyw3xrnd4ojnaJSSsXgB88cz8zmgAZ+GWjIpfDSy5JEoqVJcAb0DiKTwVsBmgLaXOKYxkECg14CaNtgBzqNVWt+IDlQEM2AcUuuy5DYogyZrxwpU0FM1IOrnIzQCJHkFWDUo17w5xQbv0oFqK4HKpVV6OEaVmVXyoLT2RT/wAfvz3pJq8Ia8J+NPOy0g9jwMczSHXGZLs48zQCLAnUCiYMRgqOVAM742qMzuu1BCZU8xQ8kqUt78+tRtOSd6B9ZMpcNtkVfOzbe06g80xBj4c8ZHlXK7SdlbY1Z9Mnnu9J1CCKUpIEDDBxkeVB0LUtNuNVikfTNVgM8Zw6yjbPUbHaqLqI1PS1MWqWrK5YAd3llbfofLfrRNl2UvorK2u9Lu5IL10DFg+M+m9Fx6heSZtNUQG5QgPEcEHfmKAfQb5pQT7LcuwOPCnOrJDq6YAls7xP/AKqF06P2ORhCVEZHEuBvjyNNllVkw+5HMnqcc6CC6v4pbZzEkjlRkrwb/gaRxaRdX+pRajcd8lrZssqx8DAsQc53A5VZreKPvlkYDi6E9Ka21+4PCMveDzoK/pfZqKxi/h7VyTu3GQDn5c6ZjTOMAPwhRyVdgKa+3RnwLD4RsAOWK2cjGVXHx5UCJ7WOJgoXIBzjzoiINAqhDgg+dE3arDC0iEFgclj+Q+dLba3up8TyzrwnOBj9aC0wn2624Wxx+nWlUs5tJzCw4s7jDChrV5rWUFpl4c9aM1YWWp2/cMw4x4lKtgg+hFBut0DEcY35b1RO0Fv3Oqz/AMsnjHzoqd77TplaN+/teMK38y58/wC9T9pocxQTgAHJBxz33H60FKvdnqJWwBUuoAmYKOZOAMZ3o+87MazZWHt1zYSJb4yWyPCPUdKAW2k8QpvG2wpBbkiQCncXuCgLWSs4yaiVakVaDCWrWRmCmpsVHKvgPwoKzqkzBs560CJyetF6sMN86AI8NBubgjmaieZm5GonzWkfvUF57FyfwpDHfJoDtAR7Tn1qbsgSEcDzND9ocd/86BUF4q2Cb1vCM4qbgoLwr2KeL2W1HokVeS3VlyjtY1HmwGB+FK2aSTm30NeLaGRckZ9SaBibyBRskHyAqFdQjkz4Yv8A8UCy28YIZhxeQ3rEktxuCT/8aAx7xByCDz4V3plpuuRxMEnYEEY42HKkEkseOWR6CohOoPCwIXzxtQWvVdOZIFFilXv2I7s8yTQVtKhQEnhZQNqq2rQxxxQ3kICvC4bYcx1phDcFn4lUujAN5fjQPuDiVyOLi6MOX/deDqvl1HUUAl8UcxGVQTjKAbVst8iyIV2b3VUj8/zoCbu2VnEiHEY33UYb/MVOgZ4WWHfPT0qMyJLCUDA+IgZP0oQ3XcSKArEg8T46Y3/ACz/AJyAfU5NRl4IdOTEhJBLD3R0J9aHsezVzK2dR1CQ9eGIcII8iefTzqyW13FPNxqU22PpU832gIXhPTIPKghtbTS9GhzEiIQMDIyzfEnc0JqGsPMEEJ4Qc7A7/hUd7pklycjizjpmoI9IWK3RWbLE4BVshaBzoKOWJbJJ86sepu3sMdtGMSyHhpR2fiabxiae+4m3CbA0E0MBtbYydDWulxhMOOu/wCNFaicqkQ670QkSxQjbfzoKX2h1cW3ai1hJ2aNj+IH6UT2gthf6QlzECZLc8R9UPP+9UHWtTWXthcSFiyJN3aZ5ADb866poKmexMgwU5EHrQc35jzrWug9ptLsrjRDJYWqR3EAB4UXBK9R61z7iX+YfWg9BrGbwmtGljHNq8M0RBAbPzoK3rEmN/WlsU21NdVt2mOEoKHTZz5UHhlyK0L5o1dKnI6Vn7ouOlAz7Me+9Q9ojib5017L6TNxvxsBWvaHRpXkYAg70FYikxRUclb/ALonB5VummTjbagtJslgVpHyfQUvleSZ2w3Co5AUfJKynAzwjzHKhpREzFiMH0NAJIm64PxqRY8Dw7/KvSEzzYfOvVAJwHbFBDJGxqN4mGx5GiigByXbFausW5wx+JoIp1jaEx5ySMClscj23BAzMIzspP5Ue78CMygjAznFJtIuheGe3u595TxRO33DQM5rxg+7KXzs/M+lRtqSCaMSBWVRuOnLn+NCOphZobmPgwfC7LxdeYOKCv7GZFZ0Rn/qPT8qCyprPNo1RjsuFz4WOMZ+VR3vfXsRdDwKpzgDlsM/lVLiuLi1IMbuhBzgDbNOdO7SCFVW6j4wDzHP/nnQWHTJ3tyROV28JwTmrBa3wlZcSgR8+Hn8PlVGu9UjuQZI1MbEEcWeZ9fSidK11bZRGyrxHJU4Ayf7frmg6CWHdqQ4I5nHXnQOoyrG6sHBAJH1HT6VW4+1MHdDDeP3VDn3fXb4V5ptxcapfQNGn8OrjvH3AI2NB1HQ4fZtOWR/CSuSPKj7QAKzA8250DNMTbwR4w7gA79KLkkFtaBBuzcqCSJ1uLgyE+EbA15rd4lpYvITgKp3rNPT7PPSq12+uP8Aw86BsZwg+ZoOb2emPfaq9srHv3lJDepPOu36RCLDT44FPhjABJ64qg/s30iWa4fU588Cr3MYx756t8htVy1y6/d2nyyE42wFPrQKrPWln1O5jQgqkzKQTtVF7W6Pc2WuTC0ci2lxJGPQ/d+uaYxfZ6wlwjhVuEBYY+8Nj+GKt2p2S6joyyRgPNbjiQjmV6ig5T7BfNzc1uNPvAPfNWkRjONvpW3AOE8vpQUm4M9t7+9aRag3kKY6+ML0xVfiYLQOV1VkHSpE1kk8gflSgtkcq1B35bUFw0fWHLsEAFeahqsqytxgEZpZoZCyEedb6wcyNQStrC4zha1Gsj0+lJeZx0rMAGguRLnmzVo6uDupPrRLLGT4h+FeSKEBIQEDfegDkDrzRt/SteM9Ac/01l3d2MQDNcxjzHFype/aDT4ScZk/pWgPdmAHL8q8dCSBjOf/AHCkk3auNciKyYr5l8VtF2ot508Vs6FRnfByaAq6ZEBWSRURgQcnnVHuQYbl1jfKq3hPmOlGapdXGoScbMMD3UAxilUjuDiRSCKB9adpJViWG9j75V5NnxD/AIpxa3+mXq8AlCE8lk2P1qjBxW3hbnQWvVdKdYzJGCV6Y34v0pA0ixLwyIUb12oeNpoR9hK8ef5GIrWSed2zI3H6tufrQEJdFW4hzrfeY5Zjjc89+dAd6w+6K29occsUFm0u0gaWIlVJDAnJziuhaCqG7hgQDBJfhA2AArjqalcoeKNgjeYFdF/ZKlze6jfX11I0gRViVidgeZx+FB1ApxXUeeirUVO2OK4hU8gM1JbRZYyHmxx8qxwJLrY+6BQSTytb254cYqm9pbaXV76x05GwrsZZW/lRef5irffKWiCnlmlthYfx09zJ77ju1B6KN/8APhQNNPhhs7WKGFeFFUBQOgFVf9od0ZLAxQHLoe8KeYFWoL3aMzEbDn5VzTXrxn1GSVjlD4dvKgTWepXUqR8UKKImySPe+Ga6N2dvu+iVQD8apOjoszSQOBjBBI65pz2YuWhlaBs5jbhIoCdTs2tb2WMrhSeIfA0IV8Jqza7bPPaJdKCSnPHMg0gZNqCoa/FlTVbMBwMVbddGBSEDiUUA0cJxW3dGiwoxWpWgL04cBz1rNRfjY+dRK5jAIrWZ+P6UAqjepAnEdqxIzzou3iznagm1XW7yKZooSkYA94Lv+NI57m4uM99NI22d2rKygGRFlHGQAeWwrSZFRcgb1lZQD4DHevH8sbA5rKyg9hclzk1OVV0JYA71lZQBy28RGeGgGHDIyjkKysoPY3bOM0SVGKysoIWAqM1lZQeHZSa+ieyKIvZ20aONI8woOFBgcq9rKCz4C8ugqKxUHxn3mJzXtZQSX6govxqCD/wPSsrKAXXpHj0idkODw1zTUd4RnzrKygj02Rlul4TirBZwq10csrGQglTjNeVlBftKbvLQq+CMH51VdQiSG7uIoxhEbavaygp2v8AKkMXuisrKCTpWvWsrKDJ9kqKI551lZQGwKOKmMSKByrKyg//2Q==',
    imageHint: 'Ankur Warikoo',
  }
];
