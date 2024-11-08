const originalData = {
  name: 'Top 10 Richest People in The World',
  data: [
    {
      date: '2021-01-01',
      rank: '1',
      name: 'Jeff Bezos',
      value: '177',
      picture:
        'https://www.usmagazine.com/wp-content/uploads/2019/01/Jeff-Bezos.jpg?w=1600&quality=86&strip=all,USA',
    },
    {
      date: '2021-01-01',
      rank: '2',
      name: 'Elon Musk',
      value: '151',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
    },
    {
      date: '2021-01-01',
      rank: '3',
      name: 'Bernard Arnault',
      value: '150',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/a/a5/Bernard_Arnault_%282%29_-_2017_%28cropped%29.jpg',
    },
    {
      date: '2021-01-01',
      rank: '4',
      name: 'Bill Gates',
      value: '124',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg',
    },
    {
      date: '2021-01-01',
      rank: '5',
      name: 'Mark Zuckerberg',
      value: '97',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
    },
    {
      date: '2021-01-01',
      rank: '6',
      name: 'Warren Buffett',
      value: '96',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg',
    },
    {
      date: '2021-01-01',
      rank: '7',
      name: 'Larry Ellison',
      value: '93',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/0/00/Larry_Ellison_picture.png',
    },
    {
      date: '2021-01-01',
      rank: '8',
      name: 'Larry Page',
      value: '91.5',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg',
    },
    {
      date: '2021-01-01',
      rank: '9',
      name: 'Sergey Brin',
      value: '89',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/a/ac/Sergey_Brin_Ted_2010.jpg',
    },
    {
      date: '2021-01-01',
      rank: '10',
      name: 'Mukesh Ambani',
      value: '84.5',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/6/69/Mukesh_Ambani.jpg',
    },
    {
      date: '2020-01-01',
      rank: '1',
      name: 'Jeff Bezos',
      value: '113',
      picture:
        'https://www.usmagazine.com/wp-content/uploads/2019/01/Jeff-Bezos.jpg?w=1600&quality=86&strip=all,USA',
    },
    {
      date: '2020-01-01',
      rank: '2',
      name: 'Bill Gates',
      value: '98',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg',
    },
    {
      date: '2020-01-01',
      rank: '3',
      name: 'Bernard Arnault',
      value: '76',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/a/a5/Bernard_Arnault_%282%29_-_2017_%28cropped%29.jpg',
    },
    {
      date: '2020-01-01',
      rank: '4',
      name: 'Warren Buffett',
      value: '67.5',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg',
    },
    {
      date: '2020-01-01',
      rank: '5',
      name: 'Larry Ellison',
      value: '59',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/0/00/Larry_Ellison_picture.png',
    },
    {
      date: '2020-01-01',
      rank: '6',
      name: 'Amancio Ortega',
      value: '55.1',
      picture:
        'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSinjFqBnaYBUMq0t925Tid5H1UbXfjx-jC6c8UGUE0G6dt-9f_E2V43nNKQZB50fYDNVCme9XS7ay_RHk',
    },
    {
      date: '2020-01-01',
      rank: '7',
      name: 'Mark Zuckerberg',
      value: '54.7',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
    },
    {
      date: '2020-01-01',
      rank: '8',
      name: 'Jim Walton',
      value: '54.6',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/b/bb/Jim_Walton_attends_shareholders_meeting.jpg',
    },
    {
      date: '2020-01-01',
      rank: '9',
      name: 'Alice Walton',
      value: '54.4',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/e/e1/Alice_Walton_%28cropped%29.jpg',
    },
    {
      date: '2020-01-01',
      rank: '10',
      name: 'S. Robson Walton',
      value: '54.1',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/b/b1/S._Robson_Walton_by_Gage_Skidmore.jpg',
    },
    {
      date: '2019-01-01',
      rank: '1',
      name: 'Jeff Bezos',
      value: '131',
      picture:
        'https://www.usmagazine.com/wp-content/uploads/2019/01/Jeff-Bezos.jpg?w=1600&quality=86&strip=all,USA',
    },
    {
      date: '2019-01-01',
      rank: '2',
      name: 'Bill Gates',
      value: '96.5',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg',
    },
    {
      date: '2019-01-01',
      rank: '3',
      name: 'Warren Buffett',
      value: '82.5',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg',
    },
    {
      date: '2019-01-01',
      rank: '4',
      name: 'Bernard Arnault',
      value: '76',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/a/a5/Bernard_Arnault_%282%29_-_2017_%28cropped%29.jpg',
    },
    {
      date: '2019-01-01',
      rank: '5',
      name: 'Carlos Slim',
      value: '64',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/b/bf/Carlos_Slim_%2845680472234%29_%28cropped%29.jpg',
    },
    {
      date: '2019-01-01',
      rank: '6',
      name: 'Amancio Ortega',
      value: '62.7',
      picture:
        'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSinjFqBnaYBUMq0t925Tid5H1UbXfjx-jC6c8UGUE0G6dt-9f_E2V43nNKQZB50fYDNVCme9XS7ay_RHk',
    },
    {
      date: '2019-01-01',
      rank: '7',
      name: 'Larry Ellison',
      value: '62.5',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/0/00/Larry_Ellison_picture.png',
    },
    {
      date: '2019-01-01',
      rank: '8',
      name: 'Mark Zuckerberg',
      value: '62.3',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
    },
    {
      date: '2019-01-01',
      rank: '9',
      name: 'Michael Bloomberg',
      value: '55.5',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/e/e2/Mike_Bloomberg_Headshot.jpg',
    },
    {
      date: '2019-01-01',
      rank: '10',
      name: 'Larry Page',
      value: '50.8',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg',
    },
    {
      date: '2018-01-01',
      rank: '1',
      name: 'Jeff Bezos',
      value: '112',
      picture:
        'https://www.usmagazine.com/wp-content/uploads/2019/01/Jeff-Bezos.jpg?w=1600&quality=86&strip=all,USA',
    },
    {
      date: '2018-01-01',
      rank: '2',
      name: 'Bill Gates',
      value: '90',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg',
    },
    {
      date: '2018-01-01',
      rank: '3',
      name: 'Warren Buffett',
      value: '84',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg',
    },
    {
      date: '2018-01-01',
      rank: '4',
      name: 'Bernard Arnault',
      value: '72',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/a/a5/Bernard_Arnault_%282%29_-_2017_%28cropped%29.jpg',
    },
    {
      date: '2018-01-01',
      rank: '5',
      name: 'Mark Zuckerberg',
      value: '71',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
    },
    {
      date: '2018-01-01',
      rank: '6',
      name: 'Amancio Ortega',
      value: '70',
      picture:
        'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSinjFqBnaYBUMq0t925Tid5H1UbXfjx-jC6c8UGUE0G6dt-9f_E2V43nNKQZB50fYDNVCme9XS7ay_RHk',
    },
    {
      date: '2018-01-01',
      rank: '7',
      name: 'Carlos Slim',
      value: '67.1',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/b/bf/Carlos_Slim_%2845680472234%29_%28cropped%29.jpg',
    },
    {
      date: '2018-01-01',
      rank: '8',
      name: 'Charles Koch',
      value: '60',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/2/20/Charles_Koch_portrait_%28cropped%29.jpg',
    },
    {
      date: '2018-01-01',
      rank: '8',
      name: 'David Koch',
      value: '60',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/3/36/David_Koch_by_Gage_Skidmore.jpg',
    },
    {
      date: '2018-01-01',
      rank: '10',
      name: 'Larry Ellison',
      value: '58.5',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/0/00/Larry_Ellison_picture.png',
    },
    {
      date: '2017-01-01',
      rank: '1',
      name: 'Bill Gates',
      value: '86.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg',
    },
    {
      date: '2017-01-01',
      rank: '2',
      name: 'Warren Buffett',
      value: '75.6',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg',
    },
    {
      date: '2017-01-01',
      rank: '3',
      name: 'Jeff Bezos',
      value: '72.8',
      picture:
        'https://www.usmagazine.com/wp-content/uploads/2019/01/Jeff-Bezos.jpg?w=1600&quality=86&strip=all,USA',
    },
    {
      date: '2017-01-01',
      rank: '4',
      name: 'Amancio Ortega',
      value: '71.3',
      picture:
        'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSinjFqBnaYBUMq0t925Tid5H1UbXfjx-jC6c8UGUE0G6dt-9f_E2V43nNKQZB50fYDNVCme9XS7ay_RHk',
    },
    {
      date: '2017-01-01',
      rank: '5',
      name: 'Mark Zuckerberg',
      value: '56.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
    },
    {
      date: '2017-01-01',
      rank: '6',
      name: 'Carlos Slim',
      value: '54.5',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/b/bf/Carlos_Slim_%2845680472234%29_%28cropped%29.jpg',
    },
    {
      date: '2017-01-01',
      rank: '7',
      name: 'Larry Ellison',
      value: '52.2',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/0/00/Larry_Ellison_picture.png',
    },
    {
      date: '2017-01-01',
      rank: '8',
      name: 'Charles Koch',
      value: '48.3',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/2/20/Charles_Koch_portrait_%28cropped%29.jpg',
    },
    {
      date: '2017-01-01',
      rank: '8',
      name: 'David Koch',
      value: '48.3',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/3/36/David_Koch_by_Gage_Skidmore.jpg',
    },
    {
      date: '2017-01-01',
      rank: '10',
      name: 'Michael Bloomberg',
      value: '47.5',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/e/e2/Mike_Bloomberg_Headshot.jpg',
    },
    {
      date: '2016-01-01',
      rank: '1',
      name: 'Bill Gates',
      value: '75.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg',
    },
    {
      date: '2016-01-01',
      rank: '2',
      name: 'Amancio Ortega',
      value: '67.0',
      picture:
        'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSinjFqBnaYBUMq0t925Tid5H1UbXfjx-jC6c8UGUE0G6dt-9f_E2V43nNKQZB50fYDNVCme9XS7ay_RHk',
    },
    {
      date: '2016-01-01',
      rank: '3',
      name: 'Warren Buffett',
      value: '60.8',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg',
    },
    {
      date: '2016-01-01',
      rank: '4',
      name: 'Carlos Slim',
      value: '50.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/b/bf/Carlos_Slim_%2845680472234%29_%28cropped%29.jpg',
    },
    {
      date: '2016-01-01',
      rank: '5',
      name: 'Jeff Bezos',
      value: '45.2',
      picture:
        'https://www.usmagazine.com/wp-content/uploads/2019/01/Jeff-Bezos.jpg?w=1600&quality=86&strip=all,USA',
    },
    {
      date: '2016-01-01',
      rank: '6',
      name: 'Mark Zuckerberg',
      value: '44.6',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
    },
    {
      date: '2016-01-01',
      rank: '7',
      name: 'Larry Ellison',
      value: '43.6',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/0/00/Larry_Ellison_picture.png',
    },
    {
      date: '2016-01-01',
      rank: '8',
      name: 'Michael Bloomberg',
      value: '40.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/e/e2/Mike_Bloomberg_Headshot.jpg',
    },
    {
      date: '2016-01-01',
      rank: '9',
      name: 'Charles Koch',
      value: '39.6',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/2/20/Charles_Koch_portrait_%28cropped%29.jpg',
    },
    {
      date: '2016-01-01',
      rank: '9',
      name: 'David Koch',
      value: '39.6',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/3/36/David_Koch_by_Gage_Skidmore.jpg',
    },
    {
      date: '2015-01-01',
      rank: '1',
      name: 'Bill Gates',
      value: '79.2',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg',
    },
    {
      date: '2015-01-01',
      rank: '2',
      name: 'Carlos Slim',
      value: '77.1',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/b/bf/Carlos_Slim_%2845680472234%29_%28cropped%29.jpg',
    },
    {
      date: '2015-01-01',
      rank: '3',
      name: 'Warren Buffett',
      value: '72.7',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg',
    },
    {
      date: '2015-01-01',
      rank: '4',
      name: 'Amancio Ortega',
      value: '64.5',
      picture:
        'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSinjFqBnaYBUMq0t925Tid5H1UbXfjx-jC6c8UGUE0G6dt-9f_E2V43nNKQZB50fYDNVCme9XS7ay_RHk',
    },
    {
      date: '2015-01-01',
      rank: '5',
      name: 'Larry Ellison',
      value: '54.3',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/0/00/Larry_Ellison_picture.png',
    },
    {
      date: '2015-01-01',
      rank: '6',
      name: 'Charles Koch',
      value: '42.9',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/2/20/Charles_Koch_portrait_%28cropped%29.jpg',
    },
    {
      date: '2015-01-01',
      rank: '6',
      name: 'David Koch',
      value: '42.9',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/3/36/David_Koch_by_Gage_Skidmore.jpg',
    },
    {
      date: '2015-01-01',
      rank: '8',
      name: 'Christy Walton',
      value: '41.7',
      picture:
        'http://news.vellorecity.com/wp-content/uploads/2016/01/06How-rich-is-Christy-Walton-1024x768.jpg',
    },
    {
      date: '2015-01-01',
      rank: '9',
      name: 'Jim Walton',
      value: '40.6',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/b/bb/Jim_Walton_attends_shareholders_meeting.jpg',
    },
    {
      date: '2015-01-01',
      rank: '10',
      name: 'Liliane Bettencourt',
      value: '40.1',
      picture:
        'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ4dci3ApL1jF-JX8t8h3c8YYT-XRuEU20g_YFA1PM7zze7js3w0sgbLQbXiVJWdFYrTUOMEEzxeR31nBY',
    },
    {
      date: '2014-01-01',
      rank: '1',
      name: 'Bill Gates',
      value: '76.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg',
    },
    {
      date: '2014-01-01',
      rank: '2',
      name: 'Carlos Slim',
      value: '72.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/b/bf/Carlos_Slim_%2845680472234%29_%28cropped%29.jpg',
    },
    {
      date: '2014-01-01',
      rank: '3',
      name: 'Amancio Ortega',
      value: '64.0',
      picture:
        'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSinjFqBnaYBUMq0t925Tid5H1UbXfjx-jC6c8UGUE0G6dt-9f_E2V43nNKQZB50fYDNVCme9XS7ay_RHk',
    },
    {
      date: '2014-01-01',
      rank: '4',
      name: 'Warren Buffett',
      value: '58.2',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg',
    },
    {
      date: '2014-01-01',
      rank: '5',
      name: 'Larry Ellison',
      value: '48.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/0/00/Larry_Ellison_picture.png',
    },
    {
      date: '2014-01-01',
      rank: '6',
      name: 'Charles Koch',
      value: '40.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/2/20/Charles_Koch_portrait_%28cropped%29.jpg',
    },
    {
      date: '2014-01-01',
      rank: '6',
      name: 'David Koch',
      value: '40.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/3/36/David_Koch_by_Gage_Skidmore.jpg',
    },
    {
      date: '2014-01-01',
      rank: '8',
      name: 'Sheldon Adelson',
      value: '38.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/f/f9/Sheldon_Adelson_crop.jpg',
    },
    {
      date: '2014-01-01',
      rank: '9',
      name: 'Christy Walton',
      value: '36.7',
      picture:
        'http://news.vellorecity.com/wp-content/uploads/2016/01/06How-rich-is-Christy-Walton-1024x768.jpg',
    },
    {
      date: '2014-01-01',
      rank: '10',
      name: 'Jim Walton',
      value: '34.7',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/b/bb/Jim_Walton_attends_shareholders_meeting.jpg',
    },
    {
      date: '2013-01-01',
      rank: '1',
      name: 'Carlos Slim',
      value: '73.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/b/bf/Carlos_Slim_%2845680472234%29_%28cropped%29.jpg',
    },
    {
      date: '2013-01-01',
      rank: '2',
      name: 'Bill Gates',
      value: '67.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg',
    },
    {
      date: '2013-01-01',
      rank: '3',
      name: 'Amancio Ortega',
      value: '57.0',
      picture:
        'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSinjFqBnaYBUMq0t925Tid5H1UbXfjx-jC6c8UGUE0G6dt-9f_E2V43nNKQZB50fYDNVCme9XS7ay_RHk',
    },
    {
      date: '2013-01-01',
      rank: '4',
      name: 'Warren Buffett',
      value: '53.5',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg',
    },
    {
      date: '2013-01-01',
      rank: '5',
      name: 'Larry Ellison',
      value: '43.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/0/00/Larry_Ellison_picture.png',
    },
    {
      date: '2013-01-01',
      rank: '6',
      name: 'Charles Koch',
      value: '34.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/2/20/Charles_Koch_portrait_%28cropped%29.jpg',
    },
    {
      date: '2013-01-01',
      rank: '6',
      name: 'David Koch',
      value: '34.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/3/36/David_Koch_by_Gage_Skidmore.jpg',
    },
    {
      date: '2013-01-01',
      rank: '8',
      name: 'Li Ka-shing',
      value: '31.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/e/e8/Li_Ka_Shing.jpg',
    },
    {
      date: '2013-01-01',
      rank: '9',
      name: 'Liliane Bettencourt',
      value: '30.0',
      picture:
        'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ4dci3ApL1jF-JX8t8h3c8YYT-XRuEU20g_YFA1PM7zze7js3w0sgbLQbXiVJWdFYrTUOMEEzxeR31nBY',
    },
    {
      date: '2013-01-01',
      rank: '10',
      name: 'Bernard Arnault',
      value: '29.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/a/a5/Bernard_Arnault_%282%29_-_2017_%28cropped%29.jpg',
    },
    {
      date: '2012-01-01',
      rank: '1',
      name: 'Carlos Slim',
      value: '69.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/b/bf/Carlos_Slim_%2845680472234%29_%28cropped%29.jpg',
    },
    {
      date: '2012-01-01',
      rank: '2',
      name: 'Bill Gates',
      value: '61.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg',
    },
    {
      date: '2012-01-01',
      rank: '3',
      name: 'Warren Buffett',
      value: '44.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg',
    },
    {
      date: '2012-01-01',
      rank: '4',
      name: 'Bernard Arnault',
      value: '41.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/a/a5/Bernard_Arnault_%282%29_-_2017_%28cropped%29.jpg',
    },
    {
      date: '2012-01-01',
      rank: '5',
      name: 'Amancio Ortega',
      value: '37.5',
      picture:
        'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSinjFqBnaYBUMq0t925Tid5H1UbXfjx-jC6c8UGUE0G6dt-9f_E2V43nNKQZB50fYDNVCme9XS7ay_RHk',
    },
    {
      date: '2012-01-01',
      rank: '6',
      name: 'Larry Ellison',
      value: '36.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/0/00/Larry_Ellison_picture.png',
    },
    {
      date: '2012-01-01',
      rank: '7',
      name: 'Eike Batista',
      value: '30.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/f/f8/EIKE_BATISTA_%28crop%29.jpg',
    },
    {
      date: '2012-01-01',
      rank: '8',
      name: 'Stefan Persson',
      value: '26',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/3/33/Stefan_Persson.jpg',
    },
    {
      date: '2012-01-01',
      rank: '9',
      name: 'Li Ka-shing',
      value: '25.5',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/e/e8/Li_Ka_Shing.jpg',
    },
    {
      date: '2012-01-01',
      rank: '10',
      name: 'Karl Albrecht',
      value: '25.4',
      picture:
        'https://static01.nyt.com/images/2014/07/21/obituaries/Albrecht-obit/Albrecht-obit-superJumbo.jpg?quality=75&auto=webp',
    },
    {
      date: '2011-01-01',
      rank: '1',
      name: 'Carlos Slim',
      value: '74.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/b/bf/Carlos_Slim_%2845680472234%29_%28cropped%29.jpg',
    },
    {
      date: '2011-01-01',
      rank: '2',
      name: 'Bill Gates',
      value: '56.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg',
    },
    {
      date: '2011-01-01',
      rank: '3',
      name: 'Warren Buffett',
      value: '50.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg',
    },
    {
      date: '2011-01-01',
      rank: '4',
      name: 'Bernard Arnault',
      value: '41.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/a/a5/Bernard_Arnault_%282%29_-_2017_%28cropped%29.jpg',
    },
    {
      date: '2011-01-01',
      rank: '5',
      name: 'Larry Ellison',
      value: '39.5',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/0/00/Larry_Ellison_picture.png',
    },
    {
      date: '2011-01-01',
      rank: '6',
      name: 'Lakshmi Mittal',
      value: '31.1',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/8/8f/Lakshmi_Mittal_LM.jpg',
    },
    {
      date: '2011-01-01',
      rank: '7',
      name: 'Amancio Ortega',
      value: '31.0',
      picture:
        'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSinjFqBnaYBUMq0t925Tid5H1UbXfjx-jC6c8UGUE0G6dt-9f_E2V43nNKQZB50fYDNVCme9XS7ay_RHk',
    },
    {
      date: '2011-01-01',
      rank: '8',
      name: 'Eike Batista',
      value: '30.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/f/f8/EIKE_BATISTA_%28crop%29.jpg',
    },
    {
      date: '2011-01-01',
      rank: '9',
      name: 'Mukesh Ambani',
      value: '27.0',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/6/69/Mukesh_Ambani.jpg',
    },
    {
      date: '2011-01-01',
      rank: '10',
      name: 'Christy Walton',
      value: '26.5',
      picture:
        'http://news.vellorecity.com/wp-content/uploads/2016/01/06How-rich-is-Christy-Walton-1024x768.jpg',
    },
  ],
};
