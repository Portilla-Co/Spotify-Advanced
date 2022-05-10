//   const endpoint = 'https://gist.githubusercontent.com/yeion7/35e79d70ca33d623d8001276ccfdfa6b/raw/8aa179329c0b19ae4076ecf72d53b1ad11ba0a8e/adele.json'

  const discography = [
    {
        "name": "30",
        "year": 2021,
        "numberOfSongs": 12,
        "songs": [
            {
                "name": "Strangers By Nature",
                "duration": "3:02"
            },
            {
                "name": "Easy On Me",
                "duration": "3:44"
            },
            {
                "name": "My Little Love",
                "duration": "6:29"
            },
            {
                "name": "Cry Your Heart Out",
                "duration": "4:15"
            },
            {
                "name": "Oh My God",
                "duration": "3:45"
            },
            {
                "name": "Can I Get It",
                "duration": "3:30"
            },
            {
                "name": "I Drink Wine",
                "duration": "6:16"
            },
            {
                "name": "All Night Parking (with Erroll Garner) Interlude",
                "duration": "2:41"
            },
            {
                "name": "Woman Like Me",
                "duration": "5:00"
            },
            {
                "name": "Hold On",
                "duration": "6:06"
            },
            {
                "name": "To Be Loved",
                "duration": "6:43"
            }
        ]
    },
    {
        "name": "25",
        "year": 2015,
        "numberOfSongs": 11,
        "songs": [
            {
                "name": "Hello",
                "duration": "4:55"
            },
            {
                "name": "Send My Love (To Your New Lover)",
                "duration": "3:43"
            },
            {
                "name": "I Miss You",
                "duration": "5:48"
            },
            {
                "name": "When We Were Young",
                "duration": "4:50"
            },
            {
                "name": "Remedy",
                "duration": "4:05"
            },
            {
                "name": "Water Under the Bridge",
                "duration": "4:00"
            },
            {
                "name": "River Lea",
                "duration": "3:45"
            },
            {
                "name": "Love In The Dark",
                "duration": "4:45"
            },
            {
                "name": "Million Years Ago",
                "duration": "3:47"
            },
            {
                "name": "All I Ask",
                "duration": "4:31"
            },
            {
                "name": "Sweetest Devotion",
                "duration": "4:11"
            }
        ]
    },
    {
        "name": "21",
        "year": 2011,
        "numberOfSongs": 11,
        "songs": [
            {
                "name": "Rolling in the Deep",
                "duration": "3:48"
            },
            {
                "name": "Rumour Has It",
                "duration": "3:43"
            },
            {
                "name": "Turning Tables",
                "duration": "4:10"
            },
            {
                "name": "Don't You Remember",
                "duration": "4:03"
            },
            {
                "name": "Set Fire to the Rain",
                "duration": "4:02"
            },
            {
                "name": "He Won't Go",
                "duration": "4:38"
            },
            {
                "name": "Take It All",
                "duration": "3:48"
            },
            {
                "name": "I'll Be Waiting",
                "duration": "4:01"
            },
            {
                "name": "One And Only",
                "duration": "5:48"
            },
            {
                "name": "Lovesong",
                "duration": "5:16"
            },
            {
                "name": "Someone Like You",
                "duration": "4:45"
            }
        ]
    },
    {
        "name": "19",
        "year": 2008,
        "numberOfSongs": 12,
        "songs": [
            {
                "name": "Daydreamer",
                "duration": "3:40"
            },
            {
                "name": "Best For Last",
                "duration": "4:18"
            },
            {
                "name": "Chasing Pavements",
                "duration": "3:30"
            },
            {
                "name": "Cold Shoulder",
                "duration": "3:11"
            },
            {
                "name": "Crazy For You",
                "duration": "3:28"
            },
            {
                "name": "Melt My Heart To Stone",
                "duration": "3:23"
            },
            {
                "name": "First Love",
                "duration": "3:10"
            },
            {
                "name": "Right As Rain",
                "duration": "3:17"
            },
            {
                "name": "Make You Feel My Love",
                "duration": "3:32"
            },
            {
                "name": "My Same",
                "duration": "3:15"
            },
            {
                "name": "Tired",
                "duration": "4:18"
            }
        ]
    }
]

//   fetch(endpoint)
//     .then(blob => blob.json())
//     .then(data => discography.push(...data));¡    
  
const nameDivSelectors = document.querySelectorAll(`.albums div:nth-child(even) div:nth-child(1)`);

nameDivSelectors.forEach((nameDiv, index) => {
    nameDiv.innerHTML = `${discography[index].name}`;
})