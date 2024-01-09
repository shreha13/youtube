import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getPopularVideos } from '../utils/api'
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, [])

  const getVideos = async () => {
    try {
    // const resp = await getPopularVideos();
      const resp = {
        "data": {
            "kind": "youtube#videoListResponse",
            "etag": "U27xV0fiTT90jbJVdMZiifjREUQ",
            "items": [
                {
                    "kind": "youtube#video",
                    "etag": "ayUtvFoSDEZ0z5zSSbeRnz-V8Lg",
                    "id": "EBdREJkch8g",
                    "snippet": {
                        "publishedAt": "2024-01-09T04:36:09Z",
                        "channelId": "UCzRWWsFjqHk1an4OnVPsl9g",
                        "title": "CFP National Championship: Michigan Wolverines vs. Washington Huskies | Full Game Highlights",
                        "description": "Check out these highlights from the 2024 College Football Playoff National Championship, where the No. 1 Michigan Wolverines defeat the No. 2 Washington Huskies to win their first national title since 1997.\n\n✔️Subscribe to ESPN+ http://espnplus.com/youtube\n✔️ Get the ESPN App: http://www.espn.com/espn/apps/espn\n✔️Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\n✔️ Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\n✔️ Watch ESPN on YouTube TV: http://es.pn/YouTubeTV",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/EBdREJkch8g/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/EBdREJkch8g/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/EBdREJkch8g/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/EBdREJkch8g/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/EBdREJkch8g/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "ESPN College Football",
                        "categoryId": "17",
                        "liveBroadcastContent": "none",
                        "localized": {
                            "title": "CFP National Championship: Michigan Wolverines vs. Washington Huskies | Full Game Highlights",
                            "description": "Check out these highlights from the 2024 College Football Playoff National Championship, where the No. 1 Michigan Wolverines defeat the No. 2 Washington Huskies to win their first national title since 1997.\n\n✔️Subscribe to ESPN+ http://espnplus.com/youtube\n✔️ Get the ESPN App: http://www.espn.com/espn/apps/espn\n✔️Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\n✔️ Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\n✔️ Watch ESPN on YouTube TV: http://es.pn/YouTubeTV"
                        }
                    },
                    "contentDetails": {
                        "duration": "PT22M20S",
                        "dimension": "2d",
                        "definition": "hd",
                        "caption": "false",
                        "licensedContent": true,
                        "contentRating": {},
                        "projection": "rectangular"
                    },
                    "statistics": {
                        "viewCount": "1336215",
                        "likeCount": "18272",
                        "favoriteCount": "0",
                        "commentCount": "3552"
                    }
                },
                {
                    "kind": "youtube#video",
                    "etag": "W_eZHwJ8QCAewWWnWetvAAgs3l4",
                    "id": "HE6P2HDYlZs",
                    "snippet": {
                        "publishedAt": "2024-01-08T04:27:30Z",
                        "channelId": "UCvdrYSJ1itgZEH19wWnSHcg",
                        "title": "Will Ferrell & Kristen Wiig Present Male Actor – Motion Picture Musical/Comedy I 81st Golden Globes",
                        "description": "Will Ferrell & Kristen Wiig present Best Performance by a Male Actor in a Motion Picture – Musical or Comedy category at the 81st Annual Golden Globe Awards. #GoldenGlobes #WillFerrell #KristenWiig\n\nStill haven't subscribed to Golden Globes on YouTube?  ►►http://www.youtube.com/GoldenGlobes\r\n\r\nCONNECT WITH US\r\nWEB: http://www.goldenglobes.com\r\nFacebook: http://www.facebook.com/GoldenGlobes\r\nTwitter: http://twitter.com/goldenglobes\r\nInstagram: http://www.instagram.com/goldenglobes/",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/HE6P2HDYlZs/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/HE6P2HDYlZs/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/HE6P2HDYlZs/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/HE6P2HDYlZs/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/HE6P2HDYlZs/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Golden Globes",
                        "tags": [
                            "Golden Globe Awards",
                            "Golden Globe Awards 2024",
                            "81st Golden Globe Awards",
                            "Jo Koy",
                            "The Beverly Hilton",
                            "CBS",
                            "Red Carpet",
                            "Dick Clark Productions",
                            "Eldridge Industries",
                            "Hollywood interviews",
                            "Cinema",
                            "Netflix",
                            "Movies",
                            "Film",
                            "Actress",
                            "Actor",
                            "Press",
                            "Association",
                            "Hollywood",
                            "2024 Nominees",
                            "Best Motion Picture",
                            "Best Performance",
                            "Best Director",
                            "Best Screeplay",
                            "Best Original Score",
                            "Best Original Song",
                            "Best Television Series",
                            "Barbenheimer",
                            "Will Ferrell",
                            "Kristen Wiig"
                        ],
                        "categoryId": "1",
                        "liveBroadcastContent": "none",
                        "defaultLanguage": "en",
                        "localized": {
                            "title": "Will Ferrell & Kristen Wiig Present Male Actor – Motion Picture Musical/Comedy I 81st Golden Globes",
                            "description": "Will Ferrell & Kristen Wiig present Best Performance by a Male Actor in a Motion Picture – Musical or Comedy category at the 81st Annual Golden Globe Awards. #GoldenGlobes #WillFerrell #KristenWiig\n\nStill haven't subscribed to Golden Globes on YouTube?  ►►http://www.youtube.com/GoldenGlobes\r\n\r\nCONNECT WITH US\r\nWEB: http://www.goldenglobes.com\r\nFacebook: http://www.facebook.com/GoldenGlobes\r\nTwitter: http://twitter.com/goldenglobes\r\nInstagram: http://www.instagram.com/goldenglobes/"
                        },
                        "defaultAudioLanguage": "en"
                    },
                    "contentDetails": {
                        "duration": "PT2M42S",
                        "dimension": "2d",
                        "definition": "hd",
                        "caption": "false",
                        "licensedContent": true,
                        "contentRating": {},
                        "projection": "rectangular"
                    },
                    "statistics": {
                        "viewCount": "2977644",
                        "likeCount": "13840",
                        "favoriteCount": "0",
                        "commentCount": "2666"
                    }
                },
                {
                    "kind": "youtube#video",
                    "etag": "rKkFV2mlkshsEIOH98dCtMNnl6Q",
                    "id": "YbO9Vddn0FI",
                    "snippet": {
                        "publishedAt": "2024-01-08T17:00:07Z",
                        "channelId": "UCBgOGeH-NL4o2WGutwverqQ",
                        "title": "NBA YoungBoy on Fatherhood, Personal Growth, Therapy, & More - The Bootleg Kev Podcast",
                        "description": "Interview w/ NBA Youngboy  on The Bootleg Kev Podcast. \n\nShot & Edited by @Only1Xiris & MSTFA. \n\nSponsored By Imperial Extractions: https://bit.ly/bootlegkev // promo code: BOOTLEG\n\nGet 50% off of KING PALM at www.kingpalm.com promo code \"BOOTLEG\"\n\nGet your first month of BLUECHEW for FREE, use the promo code \"Bootleg\" or click here: https://go.bluechew.com/bootleg\n\nSupport ODDSOX, go to: https://www.oddsoxofficial.com & use the promo code \"BOOTLEGKEV\" for 20% off at Check Out",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/YbO9Vddn0FI/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/YbO9Vddn0FI/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/YbO9Vddn0FI/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/YbO9Vddn0FI/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/YbO9Vddn0FI/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Bootleg Kev",
                        "tags": [
                            "Bootleg Kev",
                            "Bootleg Kev Podcast",
                            "Bootleg Kev Interview",
                            "Hip Hop",
                            "Rap",
                            "How to Interview",
                            "How to Interview Hip Hop",
                            "How to Interview Rappers",
                            "Rapper Interviews",
                            "Hip Hop Podcast",
                            "Rap Podcast",
                            "Music Podcast",
                            "Hip Hop Interview",
                            "nba youngboy",
                            "young boy",
                            "young boy never broke again"
                        ],
                        "categoryId": "10",
                        "liveBroadcastContent": "none",
                        "defaultLanguage": "en-US",
                        "localized": {
                            "title": "NBA YoungBoy on Fatherhood, Personal Growth, Therapy, & More - The Bootleg Kev Podcast",
                            "description": "Interview w/ NBA Youngboy  on The Bootleg Kev Podcast. \n\nShot & Edited by @Only1Xiris & MSTFA. \n\nSponsored By Imperial Extractions: https://bit.ly/bootlegkev // promo code: BOOTLEG\n\nGet 50% off of KING PALM at www.kingpalm.com promo code \"BOOTLEG\"\n\nGet your first month of BLUECHEW for FREE, use the promo code \"Bootleg\" or click here: https://go.bluechew.com/bootleg\n\nSupport ODDSOX, go to: https://www.oddsoxofficial.com & use the promo code \"BOOTLEGKEV\" for 20% off at Check Out"
                        },
                        "defaultAudioLanguage": "en-US"
                    },
                    "contentDetails": {
                        "duration": "PT45M20S",
                        "dimension": "2d",
                        "definition": "hd",
                        "caption": "false",
                        "licensedContent": true,
                        "contentRating": {},
                        "projection": "rectangular"
                    },
                    "statistics": {
                        "viewCount": "398543",
                        "likeCount": "20066",
                        "favoriteCount": "0",
                        "commentCount": "1538"
                    }
                },
                {
                    "kind": "youtube#video",
                    "etag": "RNBBDN987T5zsTOJqM2haExJb9U",
                    "id": "OEgvRelGfOs",
                    "snippet": {
                        "publishedAt": "2024-01-08T08:29:33Z",
                        "channelId": "UCjDsbbzHgTrGc4Ff26TJtsA",
                        "title": "2024 Golden Globes RECAP: Viral Memes & Must-See Moments! | 2024 Golden Globes",
                        "description": "From Kylie Jenner and Timothée Chalamet packing on the PDA to Taylor Swift and Selena Gomez sharing secrets, here’s everything missed at the 2024 Golden Globes! Golden Globe® Awards clips provided by Golden Globes, LLC and Dick Clark Productions, LLC.\n\nFull Story: https://www.eonline.com/news/1392374/golden-globe-awards-2024-winners-the-complete-list?source=youtube&medium=enews\n\n#GoldenGlobes #GoldenGlobes2024 #ENews \n\nSubscribe: http://bit.ly/enewssub\n\nAbout E! News:\nThe E! News team brings you the latest breaking entertainment, fashion and Pop Culture news. Featuring exclusive segments, celebrity highlights, trend reports and more, the E! News channel is the only destination Pop Culture fans need to stay in the know.\n\nDownload The E! News App For The Latest Celebrity News and Trending Videos: https://eonline.onelink.me/yMtl/4ead5017\n\nYour favorite shows, movies and more are here. Stream now on Peacock. https://bit.ly/PeacockEEnt\n\nConnect with E! News:\nVisit the E! News WEBSITE: http://eonli.ne/enews\nLike E! News on FACEBOOK: https://www.facebook.com/enews/\nCheck out E! News on INSTAGRAM: https://www.instagram.com/enews/\nFollow E! News on TWITTER: https://twitter.com/enews\n\nBillie Eilish Gets EMOTIONAL While Accepting Best Song Win For Barbie | 2024 Golden Globes\nhttp://www.youtube.com/user/enews",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/OEgvRelGfOs/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/OEgvRelGfOs/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/OEgvRelGfOs/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/OEgvRelGfOs/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/OEgvRelGfOs/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "E! News",
                        "tags": [
                            "E! News Now",
                            "BARBIE",
                            "BILLIE EILISH",
                            "BILLIE_EILISH",
                            "CILLIAN MURPHY",
                            "CILLIAN_MURPHY",
                            "KYLIE JENNER",
                            "KYLIE_JENNER",
                            "PARTNER AMAZON",
                            "SELENA GOMEZ",
                            "SELENA_GOMEZ",
                            "TAYLOR SWIFT",
                            "TAYLOR_SWIFT",
                            "TIMOTHEE_CHALAMET",
                            "TOP STORIES",
                            "WOCHIT",
                            "E! NEWS NOW",
                            "golden globes",
                            "golden globes 2024",
                            "emma stone",
                            "golden globe",
                            "golden globe awards",
                            "awards show",
                            "golden globes 2024 winners",
                            "golden globes red carpet 2024",
                            "golden globes 2024 barbie",
                            "chalamet",
                            "jenner",
                            "taylor swift",
                            "recap",
                            "golden globes recap"
                        ],
                        "categoryId": "24",
                        "liveBroadcastContent": "none",
                        "localized": {
                            "title": "2024 Golden Globes RECAP: Viral Memes & Must-See Moments! | 2024 Golden Globes",
                            "description": "From Kylie Jenner and Timothée Chalamet packing on the PDA to Taylor Swift and Selena Gomez sharing secrets, here’s everything missed at the 2024 Golden Globes! Golden Globe® Awards clips provided by Golden Globes, LLC and Dick Clark Productions, LLC.\n\nFull Story: https://www.eonline.com/news/1392374/golden-globe-awards-2024-winners-the-complete-list?source=youtube&medium=enews\n\n#GoldenGlobes #GoldenGlobes2024 #ENews \n\nSubscribe: http://bit.ly/enewssub\n\nAbout E! News:\nThe E! News team brings you the latest breaking entertainment, fashion and Pop Culture news. Featuring exclusive segments, celebrity highlights, trend reports and more, the E! News channel is the only destination Pop Culture fans need to stay in the know.\n\nDownload The E! News App For The Latest Celebrity News and Trending Videos: https://eonline.onelink.me/yMtl/4ead5017\n\nYour favorite shows, movies and more are here. Stream now on Peacock. https://bit.ly/PeacockEEnt\n\nConnect with E! News:\nVisit the E! News WEBSITE: http://eonli.ne/enews\nLike E! News on FACEBOOK: https://www.facebook.com/enews/\nCheck out E! News on INSTAGRAM: https://www.instagram.com/enews/\nFollow E! News on TWITTER: https://twitter.com/enews\n\nBillie Eilish Gets EMOTIONAL While Accepting Best Song Win For Barbie | 2024 Golden Globes\nhttp://www.youtube.com/user/enews"
                        },
                        "defaultAudioLanguage": "en"
                    },
                    "contentDetails": {
                        "duration": "PT6M22S",
                        "dimension": "2d",
                        "definition": "hd",
                        "caption": "false",
                        "licensedContent": true,
                        "regionRestriction": {
                            "blocked": [
                                "DE"
                            ]
                        },
                        "contentRating": {},
                        "projection": "rectangular"
                    },
                    "statistics": {
                        "viewCount": "1093004",
                        "likeCount": "11168",
                        "favoriteCount": "0",
                        "commentCount": "1960"
                    }
                },
                {
                    "kind": "youtube#video",
                    "etag": "XSWSIRVmsDAJFdU7E02U93OnAjw",
                    "id": "KvSHHnucouo",
                    "snippet": {
                        "publishedAt": "2024-01-08T01:39:03Z",
                        "channelId": "UCvdrYSJ1itgZEH19wWnSHcg",
                        "title": "Jo Koy Opening Monologue I 81st Annual Golden Globes",
                        "description": "Comedian Jo Koy welcomes everyone to the 81st Annual Golden Globe Awards. #GoldenGlobes #JoKoy #Opening\n\nStill haven't subscribed to Golden Globes on YouTube?  ►►http://www.youtube.com/GoldenGlobes\r\n\r\nCONNECT WITH US\r\nWEB: http://www.goldenglobes.com\r\nFacebook: http://www.facebook.com/GoldenGlobes\r\nTwitter: http://twitter.com/goldenglobes\r\nInstagram: http://www.instagram.com/goldenglobes/",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/KvSHHnucouo/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/KvSHHnucouo/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/KvSHHnucouo/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/KvSHHnucouo/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/KvSHHnucouo/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Golden Globes",
                        "tags": [
                            "Golden Globe Awards",
                            "Golden Globe Awards 2024",
                            "81st Golden Globe Awards",
                            "Jo Koy",
                            "The Beverly Hilton",
                            "CBS",
                            "Red Carpet",
                            "Dick Clark Productions",
                            "Eldridge Industries",
                            "Hollywood interviews",
                            "Cinema",
                            "Netflix",
                            "Movies",
                            "Film",
                            "Actress",
                            "Actor",
                            "Press",
                            "Association",
                            "Hollywood",
                            "2024 Nominees",
                            "Best Motion Picture",
                            "Best Performance",
                            "Best Director",
                            "Best Screeplay",
                            "Best Original Score",
                            "Best Original Song",
                            "Best Television Series",
                            "Barbenheimer",
                            "Golden Globes Opening"
                        ],
                        "categoryId": "1",
                        "liveBroadcastContent": "none",
                        "defaultLanguage": "en",
                        "localized": {
                            "title": "Jo Koy Opening Monologue I 81st Annual Golden Globes",
                            "description": "Comedian Jo Koy welcomes everyone to the 81st Annual Golden Globe Awards. #GoldenGlobes #JoKoy #Opening\n\nStill haven't subscribed to Golden Globes on YouTube?  ►►http://www.youtube.com/GoldenGlobes\r\n\r\nCONNECT WITH US\r\nWEB: http://www.goldenglobes.com\r\nFacebook: http://www.facebook.com/GoldenGlobes\r\nTwitter: http://twitter.com/goldenglobes\r\nInstagram: http://www.instagram.com/goldenglobes/"
                        },
                        "defaultAudioLanguage": "en"
                    },
                    "contentDetails": {
                        "duration": "PT10M38S",
                        "dimension": "2d",
                        "definition": "hd",
                        "caption": "false",
                        "licensedContent": true,
                        "contentRating": {},
                        "projection": "rectangular"
                    },
                    "statistics": {
                        "viewCount": "1651887",
                        "likeCount": "11428",
                        "favoriteCount": "0",
                        "commentCount": "6682"
                    }
                }
            ],
            "nextPageToken": "CAUQAA",
            "pageInfo": {
                "totalResults": 200,
                "resultsPerPage": 5
            }
        },
        "status": 200,
        "statusText": "",
        "headers": {
            "cache-control": "private",
            "content-encoding": "gzip",
            "content-length": "3630",
            "content-type": "application/json; charset=UTF-8",
            "date": "Tue, 09 Jan 2024 16:47:15 GMT",
            "server": "scaffolding on HTTPServer2",
            "vary": "Origin, X-Origin, Referer"
        },
        "config": {
            "transitional": {
                "silentJSONParsing": true,
                "forcedJSONParsing": true,
                "clarifyTimeoutError": false
            },
            "adapter": [
                "xhr",
                "http"
            ],
            "transformRequest": [
                null
            ],
            "transformResponse": [
                null
            ],
            "timeout": 0,
            "xsrfCookieName": "XSRF-TOKEN",
            "xsrfHeaderName": "X-XSRF-TOKEN",
            "maxContentLength": -1,
            "maxBodyLength": -1,
            "env": {},
            "headers": {
                "Accept": "application/json, text/plain, */*"
            },
            "method": "get",
            "url": "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyDTQn9HMz52PxxfRbHRvup8zho99bHIcgs"
        },
        "request": {}
    }
      const videoResp = resp.data.items;
      setVideos(videoResp);
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className='flex flex-wrap mx-auto'>
      {videos.map(video => (
        <Link key={video.id} to={`/watch?v=${video.id}`}><VideoCard item={video} /></Link>
      ))}
    </div>
  )
}

export default VideoContainer