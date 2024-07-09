export const NEW_TRIP_ACTIVITIES = [
  { value: "nightlife", label: "🌙 Night Life" },
  { value: "shopping", label: "🛒 Shopping" },
  { value: "historical", label: "⌛ Historical" },
  { value: "outdoor", label: "✨ Outdoor Adventures" },
  { value: "art", label: "🎨 Art & Cultural" },
  { value: "park", label: "🎪 Amusement Parks" },
];

export const DUMMY_PLACES = [
  {
    bestPlace: {
      place_id: "ChIJMc2u6MgbQjERdHRLvcjdVk4",
      score: 0.699999988079071,
      location: {
        lat: 16.0659047,
        lng: 108.2234108,
      },
      travelTime: 2039,
    },
    type: "art_gallery",
    indexOfDate: 0,
    averageTime: 60,
    fromTime: "06:00:00",
    nextTime: "07:00:00",
    position: 1,
    currentDate: "2022-03-06T11:00:00.000Z",
  },
  {
    bestPlace: {
      place_id: "ChIJcfUWSM0bQjERqyE3XkmTzsE",
      score: 0.4000000059604645,
      location: {
        lat: 16.078051,
        lng: 108.2290361,
      },
      travelTime: 498,
    },
    type: "amusement_park",
    indexOfDate: 0,
    averageTime: 240,
    fromTime: "07:00:00",
    nextTime: "11:00:00",
    position: 2,
    currentDate: "2022-03-06T11:00:00.000Z",
  },
  {
    bestPlace: {
      place_id: "ChIJ0dyCfdoZQjERiFB6YpewJew",
      score: 0,
      location: {
        lat: 16.0546102,
        lng: 108.2187773,
      },
      travelTime: 670,
    },
    type: "convenience_store",
    indexOfDate: 0,
    averageTime: 15,
    fromTime: "11:08:18",
    nextTime: "11:23:18",
    position: 3,
    currentDate: "2022-03-06T11:00:00.000Z",
  },
  {
    bestPlace: {
      place_id: "ChIJlR7olXUfQjEROPkUJIpra9A",
      score: 0.800000011920929,
      location: {
        lat: 16.0543584,
        lng: 108.0809822,
      },
      travelTime: 2002,
    },
    type: "aquarium",
    indexOfDate: 0,
    averageTime: 90,
    fromTime: "11:34:28",
    nextTime: "13:04:28",
    position: 4,
    currentDate: "2022-03-06T11:00:00.000Z",
  },
];

export const DUMMY_TRIP_DATA = {
  userId: 2,
  date_range: ["2022-03-06T11:00:00.000Z", "2022-03-07T11:00:00.000Z"],
  startPlaceId: "ChIJEyolkscZQjERBn5yhkvL8B0",
  startLocation: {
    lat: 16.047079,
    lng: 108.20623,
  },
  types: ["outdoor", "art", "park", "historical"],
  placeList: {
    "2022-03-06T11:00:00.000Z": [
      {
        type: "park",
        place_id: "ChIJ4YhDz-kZQjERIEAdmJv8AwI",
        lat: 16.047079,
        lng: 108.20623,
        score: 0.4000000059604645,
        visitTime: 60,
        position: 0,
        fromTime: "06:00:01",
        nextTime: "07:00:01",
        currentDate: "2022-03-06T11:00:00.000Z",
        liked: true,
        details: {
          formatted_address:
            "26V4+H44, Hòa Thuận Nam, Hải Châu, Đà Nẵng 550000, Vietnam",
          geometry: {
            location: {
              lat: 16.047079,
              lng: 108.20623,
            },
            viewport: {
              northeast: {
                lat: 16.0452355802915,
                lng: 108.2066703802915,
              },
              southwest: {
                lat: 16.0425376197085,
                lng: 108.2039724197085,
              },
            },
          },
          name: "Hello",
          photos: [
            "https://maps.google.com/maps/contrib/116130037372502940388",
            "https://maps.google.com/maps/contrib/116130037372502940388",
          ],
          place_id: "ChIJ4YhDz-kZQjERIEAdmJv8AwI",
        },
      },
      {
        type: "park",
        place_id: "ChIJ4YhDz-kZQjERIEAdmJv8AwI",
        lat: 16.0438866,
        lng: 108.2053214,
        score: 0.4000000059604645,
        visitTime: 60,
        position: 1,
        fromTime: "06:00:01",
        nextTime: "07:00:01",
        currentDate: "2022-03-06T11:00:00.000Z",
        liked: true,
        details: {
          formatted_address:
            "26V4+H44, Hòa Thuận Nam, Hải Châu, Đà Nẵng 550000, Vietnam",
          geometry: {
            location: {
              lat: 16.0438866,
              lng: 108.2053214,
            },
            viewport: {
              northeast: {
                lat: 16.0452355802915,
                lng: 108.2066703802915,
              },
              southwest: {
                lat: 16.0425376197085,
                lng: 108.2039724197085,
              },
            },
          },
          name: "Hồ Hòa Thuận",
          photos: [
            "https://maps.google.com/maps/contrib/116130037372502940388",
            "https://maps.google.com/maps/contrib/116130037372502940388",
          ],
          place_id: "ChIJ4YhDz-kZQjERIEAdmJv8AwI",
        },
      },
      {
        type: "church",
        place_id: "ChIJBUGlQb4ZQjERT8HjiqufUcc",
        lat: 16.0440841,
        lng: 108.2097487,
        score: 0.800000011920929,
        visitTime: 60,
        position: 2,
        fromTime: "07:00:04",
        nextTime: "08:00:04",
        currentDate: "2022-03-06T11:00:00.000Z",
        details: {
          formatted_address:
            "150 Nguyễn Hữu Thọ, Hòa Thuận Nam, Hải Châu, Đà Nẵng 550000, Vietnam",
          geometry: {
            location: {
              lat: 16.0440841,
              lng: 108.2097487,
            },
            viewport: {
              northeast: {
                lat: 16.0454150802915,
                lng: 108.2112236802915,
              },
              southwest: {
                lat: 16.0427171197085,
                lng: 108.2085257197085,
              },
            },
          },
          name: "Hòa Cường catholic church",
          photos: [
            "https://maps.google.com/maps/contrib/117091937823880650178",
            "https://maps.google.com/maps/contrib/117091937823880650178",
            "https://maps.google.com/maps/contrib/117091937823880650178",
            "https://maps.google.com/maps/contrib/117091937823880650178",
            "https://maps.google.com/maps/contrib/117091937823880650178",
            "https://maps.google.com/maps/contrib/117091937823880650178",
            "https://maps.google.com/maps/contrib/117091937823880650178",
            "https://maps.google.com/maps/contrib/117091937823880650178",
            "https://maps.google.com/maps/contrib/117091937823880650178",
            "https://maps.google.com/maps/contrib/117091937823880650178",
          ],
          place_id: "ChIJBUGlQb4ZQjERT8HjiqufUcc",
          rating: 4.7,
          user_ratings_total: 230,
          website: "https://www.facebook.com/NhaThoHoaCuongDaNang",
        },
      },
      {
        type: "park",
        place_id: "ChIJw3S0JScZQjERLl8itWuRdtE",
        lat: 16.0409119,
        lng: 108.2094607,
        score: 0.20000000298023224,
        visitTime: 60,
        position: 3,
        fromTime: "08:00:06",
        nextTime: "09:00:06",
        currentDate: "2022-03-06T11:00:00.000Z",
        details: {
          formatted_address:
            "26R5+9Q8, Hoà Cường Bắc, Hải Châu, Đà Nẵng 550000, Vietnam",
          geometry: {
            location: {
              lat: 16.0409119,
              lng: 108.2094607,
            },
            viewport: {
              northeast: {
                lat: 16.0422674802915,
                lng: 108.2108648802915,
              },
              southwest: {
                lat: 16.0395695197085,
                lng: 108.2081669197085,
              },
            },
          },
          name: "Công viên",
          place_id: "ChIJw3S0JScZQjERLl8itWuRdtE",
          photos: [],
        },
      },
      {
        type: "art_gallery",
        place_id: "ChIJ12CJWF0aQjERDjVYKisOFIo",
        lat: 16.0333593,
        lng: 108.2099078,
        score: 0.8999999761581421,
        visitTime: 60,
        position: 4,
        fromTime: "09:00:11",
        nextTime: "10:00:11",
        currentDate: "2022-03-06T11:00:00.000Z",
        details: {
          formatted_address:
            "93 Lý Nhân Tông, Khuê Trung, Cẩm Lệ, Đà Nẵng 550000, Vietnam",
          geometry: {
            location: {
              lat: 16.0333593,
              lng: 108.2099078,
            },
            viewport: {
              northeast: {
                lat: 16.0347095302915,
                lng: 108.2112514802915,
              },
              southwest: {
                lat: 16.03201156970849,
                lng: 108.2085535197085,
              },
            },
          },
          name: "BroCanvas - Xưởng Tranh Canvas Động Lực",
          photos: [
            "https://maps.google.com/maps/contrib/108963306760556194375",
            "https://maps.google.com/maps/contrib/108963306760556194375",
            "https://maps.google.com/maps/contrib/108963306760556194375",
            "https://maps.google.com/maps/contrib/108963306760556194375",
            "https://maps.google.com/maps/contrib/108963306760556194375",
            "https://maps.google.com/maps/contrib/108963306760556194375",
            "https://maps.google.com/maps/contrib/108963306760556194375",
            "https://maps.google.com/maps/contrib/108963306760556194375",
            "https://maps.google.com/maps/contrib/108963306760556194375",
            "https://maps.google.com/maps/contrib/108963306760556194375",
          ],
          place_id: "ChIJ12CJWF0aQjERDjVYKisOFIo",
          rating: 4.9,
          user_ratings_total: 128,
          website: "https://brocanvas.com/",
        },
      },
      {
        type: "museum",
        place_id: "ChIJn-JvF7kZQjERypZAqeWZNRk",
        lat: 16.0262415,
        lng: 108.2109931,
        score: 0,
        visitTime: 120,
        position: 5,
        fromTime: "10:00:15",
        nextTime: "12:00:15",
        currentDate: "2022-03-06T11:00:00.000Z",
        details: {
          formatted_address:
            "108 Hoàng Dư Khương, Khuê Trung, Cẩm Lệ, Đà Nẵng 500000, Vietnam",
          geometry: {
            location: {
              lat: 16.0262415,
              lng: 108.2109931,
            },
            viewport: {
              northeast: {
                lat: 16.0275245802915,
                lng: 108.2123830802915,
              },
              southwest: {
                lat: 16.0248266197085,
                lng: 108.2096851197085,
              },
            },
          },
          name: "karmasheye",
          photos: [
            "https://maps.google.com/maps/contrib/110875093855722662388",
          ],
          place_id: "ChIJn-JvF7kZQjERypZAqeWZNRk",
        },
      },
      {
        type: "park",
        place_id: "ChIJsSeXFIkZQjERN3BAjNCbAVw",
        lat: 16.0314686,
        lng: 108.2170782,
        score: 0.8999999761581421,
        visitTime: 60,
        position: 6,
        fromTime: "12:00:20",
        nextTime: "13:00:20",
        currentDate: "2022-03-06T11:00:00.000Z",
        details: {
          formatted_address:
            "18 Hồ Nguyên Trừng, Hoà Cường Nam, Hải Châu, Đà Nẵng 550000, Vietnam",
          geometry: {
            location: {
              lat: 16.0314686,
              lng: 108.2170782,
            },
            viewport: {
              northeast: {
                lat: 16.0327676802915,
                lng: 108.2184348302915,
              },
              southwest: {
                lat: 16.0300697197085,
                lng: 108.2157368697085,
              },
            },
          },
          name: "CÂY CẢNH SÂN VƯỜN TẠI ĐÀ NẴNG",
          photos: [
            "https://maps.google.com/maps/contrib/117440762923522585658",
            "https://maps.google.com/maps/contrib/109347992351204121956",
            "https://maps.google.com/maps/contrib/105854711021159182027",
            "https://maps.google.com/maps/contrib/107692372271978754580",
            "https://maps.google.com/maps/contrib/117440762923522585658",
            "https://maps.google.com/maps/contrib/117440762923522585658",
            "https://maps.google.com/maps/contrib/105854711021159182027",
            "https://maps.google.com/maps/contrib/117440762923522585658",
          ],
          place_id: "ChIJsSeXFIkZQjERN3BAjNCbAVw",
          rating: 4.1,
          user_ratings_total: 9,
        },
      },
      {
        type: "art_gallery",
        place_id: "ChIJAUpK1PEZQjERGcxTbMmoz4g",
        lat: 16.0298194,
        lng: 108.2226565,
        score: 0.800000011920929,
        visitTime: 60,
        position: 7,
        fromTime: "13:00:23",
        nextTime: "14:00:23",
        currentDate: "2022-03-06T11:00:00.000Z",
        details: {
          formatted_address:
            "Hòa Cường, Hòa Cường Nam, Hải Châu District, Da Nang, Vietnam",
          geometry: {
            location: {
              lat: 16.0298194,
              lng: 108.2226565,
            },
            viewport: {
              northeast: {
                lat: 16.03117988029151,
                lng: 108.2240068802915,
              },
              southwest: {
                lat: 16.0284819197085,
                lng: 108.2213089197085,
              },
            },
          },
          name: "Gallery Du Mục Art",
          place_id: "ChIJAUpK1PEZQjERGcxTbMmoz4g",
          photos: [],
        },
      },
      {
        type: "amusement_park",
        place_id: "ChIJ28gTf6kZQjERubSmzqIYC9A",
        lat: 16.0354751,
        lng: 108.2256831,
        score: 0.699999988079071,
        visitTime: 240,
        position: 8,
        fromTime: "14:00:27",
        nextTime: "18:00:27",
        currentDate: "2022-03-06T11:00:00.000Z",
        details: {
          formatted_address: "Làng thể thao, tuyên sơn, Đà Nẵng 50000, Vietnam",

          geometry: {
            location: {
              lat: 16.0354751,
              lng: 108.2256831,
            },
            viewport: {
              northeast: {
                lat: 16.0368188302915,
                lng: 108.2269710802915,
              },
              southwest: {
                lat: 16.0341208697085,
                lng: 108.2242731197085,
              },
            },
          },
          name: "Công Viên Nước Đà Nẵng - Holie Water Park",
          photos: [
            "https://maps.google.com/maps/contrib/107801175057623658539",
            "https://maps.google.com/maps/contrib/102610783144659799053",
            "https://maps.google.com/maps/contrib/101167758851332500630",
            "https://maps.google.com/maps/contrib/109101145458109063475",
            "https://maps.google.com/maps/contrib/112903561807561688777",
            "https://maps.google.com/maps/contrib/100799695005824117279",
            "https://maps.google.com/maps/contrib/108995902673181873834",
            "https://maps.google.com/maps/contrib/115255462245773914422",
            "https://maps.google.com/maps/contrib/112903561807561688777",
            "https://maps.google.com/maps/contrib/101323735616509855264",
          ],
          place_id: "ChIJ28gTf6kZQjERubSmzqIYC9A",
          rating: 4.7,
          user_ratings_total: 76,
          website: "https://www.holie.vn/",
        },
      },
      {
        type: "park",
        place_id: "ChIJF8yRoecZQjERdDBeBdSRD-Y",
        lat: 16.0412139,
        lng: 108.2256332,
        score: 0.800000011920929,
        visitTime: 60,
        position: 9,
        fromTime: "18:00:31",
        nextTime: "19:00:31",
        currentDate: "2022-03-06T11:00:00.000Z",
        details: {
          formatted_address:
            "Đ. 2 Tháng 9, Hoà Cường Bắc, Hải Châu, Đà Nẵng 550000, Vietnam",
          geometry: {
            location: {
              lat: 16.0412139,
              lng: 108.2256332,
            },
            viewport: {
              northeast: {
                lat: 16.04256503029151,
                lng: 108.2270055302915,
              },
              southwest: {
                lat: 16.0398670697085,
                lng: 108.2243075697085,
              },
            },
          },
          name: "DA NANG DOWNTOWN",
          photos: [
            "https://maps.google.com/maps/contrib/114293352661591729330",
            "https://maps.google.com/maps/contrib/110349355411450453201",
            "https://maps.google.com/maps/contrib/115266504627985498258",
            "https://maps.google.com/maps/contrib/109035042669177526786",
            "https://maps.google.com/maps/contrib/109277448807677014327",
            "https://maps.google.com/maps/contrib/111538451892641649303",
            "https://maps.google.com/maps/contrib/108895501811183542841",
            "https://maps.google.com/maps/contrib/106868634638188878424",
            "https://maps.google.com/maps/contrib/110793562231673871744",
            "https://maps.google.com/maps/contrib/112138844394713695299",
          ],
          place_id: "ChIJF8yRoecZQjERdDBeBdSRD-Y",
          rating: 4.4,
          user_ratings_total: 9859,
          website: "https://asiapark.sunworld.vn/",
        },
      },
    ],
    "2022-03-07T11:00:00.000Z": [
      {
        type: "park",
        place_id: "ChIJkzbTbwwZQjERKXFVdeGYBgg",
        lat: 16.0504958,
        lng: 108.209168,
        score: 0.4000000059604645,
        visitTime: 60,
        position: 1,
        fromTime: "06:00:02",
        nextTime: "07:00:02",
        currentDate: "2022-03-07T11:00:00.000Z",
        details: {
          formatted_address:
            "3625+5MV, Duy Tân, Hòa Thuận Nam, Hải Châu, Đà Nẵng 550000, Vietnam",
          geometry: {
            location: {
              lat: 16.0504958,
              lng: 108.209168,
            },
            viewport: {
              northeast: {
                lat: 16.0518500302915,
                lng: 108.2103762302915,
              },
              southwest: {
                lat: 16.0491520697085,
                lng: 108.2076782697085,
              },
            },
          },
          name: "Vòng xoay Duy Tân",
          photos: [
            "https://maps.google.com/maps/contrib/112776695784269806852",
            "https://maps.google.com/maps/contrib/112776695784269806852",
          ],
          place_id: "ChIJkzbTbwwZQjERKXFVdeGYBgg",
          rating: 5,
          user_ratings_total: 5,
        },
      },
      {
        type: "cafe",
        place_id: "ChIJHwTBgbkZQjERMasXdSlll1w",
        lat: 16.0511511,
        lng: 108.2082478,
        score: 0.30000001192092896,
        visitTime: 60,
        position: 2,
        fromTime: "07:00:03",
        nextTime: "08:00:03",
        currentDate: "2022-03-07T11:00:00.000Z",
        details: {
          formatted_address:
            "122 Duy Tân, Hòa Thuận Nam, Hải Châu, Đà Nẵng 550000, Vietnam",
          geometry: {
            location: {
              lat: 16.0511511,
              lng: 108.2082478,
            },
            viewport: {
              northeast: {
                lat: 16.0524393802915,
                lng: 108.2095927802915,
              },
              southwest: {
                lat: 16.0497414197085,
                lng: 108.2068948197085,
              },
            },
          },
          name: "G-Coffee",
          photos: [
            "https://maps.google.com/maps/contrib/109401214594003538703",
            "https://maps.google.com/maps/contrib/117326325593278699052",
            "https://maps.google.com/maps/contrib/109454453791051591968",
            "https://maps.google.com/maps/contrib/100785921887691131345",
            "https://maps.google.com/maps/contrib/109401214594003538703",
            "https://maps.google.com/maps/contrib/109401214594003538703",
            "https://maps.google.com/maps/contrib/109401214594003538703",
            "https://maps.google.com/maps/contrib/117032431885861088671",
            "https://maps.google.com/maps/contrib/109401214594003538703",
            "https://maps.google.com/maps/contrib/108045410840611405081",
          ],
          place_id: "ChIJHwTBgbkZQjERMasXdSlll1w",
          price_level: 1,
          rating: 4.1,
          user_ratings_total: 36,
        },
      },
      {
        type: "park",
        place_id: "ChIJuRvCwCQZQjERKy_0EzdnYBE",
        lat: 16.0561985,
        lng: 108.2046485,
        score: 0.10000000149011612,
        visitTime: 60,
        position: 3,
        fromTime: "08:00:07",
        nextTime: "09:00:07",
        currentDate: "2022-03-07T11:00:00.000Z",
        details: {
          formatted_address:
            "3643+FVC, Duy Tân, Hòa Thuận Tây, Hải Châu, Đà Nẵng 550000, Vietnam",
          geometry: {
            location: {
              lat: 16.0561985,
              lng: 108.2046485,
            },
            viewport: {
              northeast: {
                lat: 16.0574853802915,
                lng: 108.2056528302915,
              },
              southwest: {
                lat: 16.0547874197085,
                lng: 108.2029548697085,
              },
            },
          },
          name: "Hồ nước",
          place_id: "ChIJuRvCwCQZQjERKy_0EzdnYBE",
          // @ts-ignore
          photos: [],
        },
      },
      {
        type: "cafe",
        place_id: "ChIJPQw247sZQjERXlCopH3mlEc",
        lat: 16.0553013,
        lng: 108.2086607,
        score: 0.800000011920929,
        visitTime: 60,
        position: 4,
        fromTime: "09:00:09",
        nextTime: "10:00:09",
        currentDate: "2022-03-07T11:00:00.000Z",
        details: {
          formatted_address:
            "34 Nguyễn Hữu Thọ, Hòa Thuận Nam, Hải Châu, Đà Nẵng 550000, Vietnam",
          geometry: {
            location: {
              lat: 16.0553013,
              lng: 108.2086607,
            },
            viewport: {
              northeast: {
                lat: 16.0566201802915,
                lng: 108.2099382302915,
              },
              southwest: {
                lat: 16.0539222197085,
                lng: 108.2072402697085,
              },
            },
          },
          name: "Cafe VIP Vườn",
          photos: [
            "https://maps.google.com/maps/contrib/117024570654479050540",
            "https://maps.google.com/maps/contrib/103343211827612045836",
            "https://maps.google.com/maps/contrib/106153345998910963301",
            "https://maps.google.com/maps/contrib/103343211827612045836",
            "https://maps.google.com/maps/contrib/118194950884793974203",
            "https://maps.google.com/maps/contrib/101761089451960882124",
            "https://maps.google.com/maps/contrib/116957950671989668082",
            "https://maps.google.com/maps/contrib/116713077120234098368",
            "https://maps.google.com/maps/contrib/103647114404568994648",
            "https://maps.google.com/maps/contrib/111127424911105871799",
          ],
          place_id: "ChIJPQw247sZQjERXlCopH3mlEc",
          price_level: 2,
          rating: 3.8,
          user_ratings_total: 461,
        },
      },
      {
        type: "museum",
        place_id: "ChIJGculbbQZQjERPy4RPlUVE7U",
        lat: 16.0610803,
        lng: 108.2089665,
        score: 0.10000000149011612,
        visitTime: 120,
        position: 5,
        fromTime: "10:00:13",
        nextTime: "12:00:13",
        currentDate: "2022-03-07T11:00:00.000Z",
        details: {
          formatted_address:
            "3665+CHP, Thạc Gián, Thanh Khê, Đà Nẵng 550000, Vietnam",
          geometry: {
            location: {
              lat: 16.0610803,
              lng: 108.2089665,
            },
            viewport: {
              northeast: {
                lat: 16.0624246302915,
                lng: 108.2103158802915,
              },
              southwest: {
                lat: 16.0597266697085,
                lng: 108.2076179197085,
              },
            },
          },
          name: "DNTN TÂN TÂN",
          photos: [
            "https://maps.google.com/maps/contrib/106425662006588556957",
          ],
          place_id: "ChIJGculbbQZQjERPy4RPlUVE7U",
          rating: 4.1,
          user_ratings_total: 10,
        },
      },
      {
        type: "cafe",
        place_id: "ChIJTwWWiLQZQjEReHDnRfJOoBo",
        lat: 16.06297,
        lng: 108.2086648,
        score: 0.20000000298023224,
        visitTime: 60,
        position: 6,
        fromTime: "12:00:14",
        nextTime: "13:00:14",
        currentDate: "2022-03-07T11:00:00.000Z",
        details: {
          formatted_address:
            "Thạc Gián, Thanh Khê District, Da Nang 550000, Vietnam",
          geometry: {
            location: {
              lat: 16.06297,
              lng: 108.2086648,
            },
            viewport: {
              northeast: {
                lat: 16.0643311302915,
                lng: 108.2100129802915,
              },
              southwest: {
                lat: 16.06163316970849,
                lng: 108.2073150197085,
              },
            },
          },
          name: "Đã khát tận nơi",
          place_id: "ChIJTwWWiLQZQjEReHDnRfJOoBo",
          photos: [],
        },
      },
      {
        type: "bowling_alley",
        place_id: "ChIJz6w4aksYQjERI8BlgRz-mfc",
        lat: 16.06629599999999,
        lng: 108.2093802,
        score: 0,
        visitTime: 120,
        position: 7,
        fromTime: "13:00:16",
        nextTime: "15:00:16",
        currentDate: "2022-03-07T11:00:00.000Z",
        details: {
          formatted_address:
            "37 Lý Thái Tổ, Thạc Gián, Thanh Khê, Đà Nẵng 550000, Vietnam",
          geometry: {
            location: {
              lat: 16.06629599999999,
              lng: 108.2093802,
            },
            viewport: {
              northeast: {
                lat: 16.0676938302915,
                lng: 108.2107197302915,
              },
              southwest: {
                lat: 16.06499586970849,
                lng: 108.2080217697085,
              },
            },
          },
          name: "Club Billiards Tiger",
          photos: [
            "https://maps.google.com/maps/contrib/110290554782939120684",
          ],
          place_id: "ChIJz6w4aksYQjERI8BlgRz-mfc",
          rating: 5,
          user_ratings_total: 1,
        },
      },
      {
        type: "cafe",
        place_id: "ChIJe6UbJrUZQjERqEOSbn2CxE0",
        lat: 16.0642079,
        lng: 108.2113442,
        score: 0,
        visitTime: 60,
        position: 8,
        fromTime: "15:00:17",
        nextTime: "16:00:17",
        currentDate: "2022-03-07T11:00:00.000Z",
        details: {
          formatted_address:
            "5 Quang Dũng, Vĩnh Trung, Thanh Khê, Đà Nẵng 550000, Vietnam",
          geometry: {
            location: {
              lat: 16.0642079,
              lng: 108.2113442,
            },
            viewport: {
              northeast: {
                lat: 16.0655524802915,
                lng: 108.2126691802915,
              },
              southwest: {
                lat: 16.0628545197085,
                lng: 108.2099712197085,
              },
            },
          },
          name: "Ngõ",
          photos: [
            "https://maps.google.com/maps/contrib/107779509973970650420",
            "https://maps.google.com/maps/contrib/114445778754395176333",
            "https://maps.google.com/maps/contrib/108453869244209945058",
            "https://maps.google.com/maps/contrib/114445778754395176333",
            "https://maps.google.com/maps/contrib/107393411246973566652",
            "https://maps.google.com/maps/contrib/103392849034584792072",
            "https://maps.google.com/maps/contrib/108453869244209945058",
            "https://maps.google.com/maps/contrib/114445778754395176333",
            "https://maps.google.com/maps/contrib/114445778754395176333",
            "https://maps.google.com/maps/contrib/114445778754395176333",
          ],
          place_id: "ChIJe6UbJrUZQjERqEOSbn2CxE0",
          price_level: 2,
          rating: 3.7,
          user_ratings_total: 49,
          website: "http://fb.me/CoffeeNgo05quangdung",
        },
      },
      {
        type: "church",
        place_id: "ChIJR-Lo8UkYQjER14bCgSZ5-6U",
        lat: 16.0712717,
        lng: 108.2131282,
        score: 0.5,
        visitTime: 60,
        position: 9,
        fromTime: "16:00:22",
        nextTime: "17:00:22",
        currentDate: "2022-03-07T11:00:00.000Z",
        details: {
          formatted_address:
            "190 Ông Ích Khiêm, Tân Chính, Thanh Khê, Đà Nẵng 550000, Vietnam",
          geometry: {
            location: {
              lat: 16.0712717,
              lng: 108.2131282,
            },
            viewport: {
              northeast: {
                lat: 16.0726337302915,
                lng: 108.2145338802915,
              },
              southwest: {
                lat: 16.0699357697085,
                lng: 108.2118359197085,
              },
            },
          },
          name: "HTTL Chi hội Đà Nẵng",
          photos: [
            "https://maps.google.com/maps/contrib/104387014229385034609",
            "https://maps.google.com/maps/contrib/103526208395627493348",
            "https://maps.google.com/maps/contrib/110597725129075611120",
            "https://maps.google.com/maps/contrib/100063532749307799385",
            "https://maps.google.com/maps/contrib/117508977755051715487",
            "https://maps.google.com/maps/contrib/110195742321045891949",
            "https://maps.google.com/maps/contrib/100063532749307799385",
            "https://maps.google.com/maps/contrib/111564533508872045076",
            "https://maps.google.com/maps/contrib/113054749828827909185",
            "https://maps.google.com/maps/contrib/102049209868331546392",
          ],
          place_id: "ChIJR-Lo8UkYQjER14bCgSZ5-6U",
          rating: 4.5,
          user_ratings_total: 94,
        },
      },
      {
        type: "cafe",
        place_id: "ChIJD0rNYkgYQjERJYPNK6Zo_m8",
        lat: 16.0766183,
        lng: 108.2100292,
        score: 0.800000011920929,
        visitTime: 60,
        position: 10,
        fromTime: "17:00:26",
        nextTime: "18:00:26",
        currentDate: "2022-03-07T11:00:00.000Z",
        details: {
          formatted_address:
            "46 Đ. Bắc Đẩu, Thanh Bình, Hải Châu, Đà Nẵng 550000, Vietnam",
          geometry: {
            location: {
              lat: 16.0766183,
              lng: 108.2100292,
            },
            viewport: {
              northeast: {
                lat: 16.0779342302915,
                lng: 108.2113532302915,
              },
              southwest: {
                lat: 16.07523626970849,
                lng: 108.2086552697085,
              },
            },
          },
          name: "Meal Cafe Royal",
          photos: [
            "https://maps.google.com/maps/contrib/118295629732947266263",
            "https://maps.google.com/maps/contrib/109333588129240751552",
            "https://maps.google.com/maps/contrib/109333588129240751552",
            "https://maps.google.com/maps/contrib/109333588129240751552",
          ],
          place_id: "ChIJD0rNYkgYQjERJYPNK6Zo_m8",
          rating: 3.7,
          user_ratings_total: 18,
          website: "http://hoanggiacoffee.com.vn/",
        },
      },
      {
        type: "church",
        place_id: "ChIJgavsxEcYQjERZ7SM4SrrJxE",
        lat: 16.0764686,
        lng: 108.2131655,
        score: 0.5,
        visitTime: 60,
        position: 11,
        fromTime: "18:00:27",
        nextTime: "19:00:27",
        currentDate: "2022-03-07T11:00:00.000Z",
        details: {
          formatted_address:
            "69 Cao Thắng, Thanh Bình, Hải Châu, Đà Nẵng 550000, Vietnam",
          geometry: {
            location: {
              lat: 16.0764686,
              lng: 108.2131655,
            },
            viewport: {
              northeast: {
                lat: 16.0779664302915,
                lng: 108.2146292302915,
              },
              southwest: {
                lat: 16.0752684697085,
                lng: 108.2119312697085,
              },
            },
          },
          name: "Thanh Bình Catholic Church",
          photos: [
            "https://maps.google.com/maps/contrib/112009622174855351175",
            "https://maps.google.com/maps/contrib/104178404376840416414",
            "https://maps.google.com/maps/contrib/109650741915365724380",
            "https://maps.google.com/maps/contrib/105764898822913654273",
            "https://maps.google.com/maps/contrib/106699811230066772323",
            "https://maps.google.com/maps/contrib/104607434026543035082",
            "https://maps.google.com/maps/contrib/103628399760919347386",
            "https://maps.google.com/maps/contrib/113453179509341340540",
            "https://maps.google.com/maps/contrib/104151975279039589460",
            "https://maps.google.com/maps/contrib/104151975279039589460",
          ],
          place_id: "ChIJgavsxEcYQjERZ7SM4SrrJxE",
          rating: 4.6,
          user_ratings_total: 88,
          website: "http://giothanhle.net/gio-le/nha-tho-thanh-binh-da-nang",
        },
      },
    ],
  },
};
