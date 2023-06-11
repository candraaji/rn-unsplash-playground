import {View} from 'react-native';
import Card from './Card';
import {IUnsplashPicture, UnsplashDataResponse} from 'src/types/Unsplash';
import React from 'react';

// const mockData = [
//   {
//     id: 'x-F7S_lqN2U',
//     slug: 'x-F7S_lqN2U',
//     created_at: '2023-04-28T12:59:36Z',
//     updated_at: '2023-06-10T00:33:36Z',
//     promoted_at: null,
//     width: 8192,
//     height: 5464,
//     color: '#0c73d9',
//     blur_hash: 'LrBXy#VWDgxt-hXBIBs:iuo}R+Rk',
//     description:
//       'Home to kaleidoscopic-colored coral reefs and an abundance of diverse marine life | Islands of NEOM- NEOM, Saudi Arabia',
//     alt_description: 'a person swimming in the water near a cave',
//     urls: {
//       raw: 'https://images.unsplash.com/photo-1682686581580-d99b0230064e?ixid=M3w0NjAwMzF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NjQyMjU1M3w&ixlib=rb-4.0.3',
//       full: 'https://images.unsplash.com/photo-1682686581580-d99b0230064e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NjAwMzF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NjQyMjU1M3w&ixlib=rb-4.0.3&q=85',
//       regular:
//         'https://images.unsplash.com/photo-1682686581580-d99b0230064e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMzF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NjQyMjU1M3w&ixlib=rb-4.0.3&q=80&w=1080',
//       small:
//         'https://images.unsplash.com/photo-1682686581580-d99b0230064e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMzF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NjQyMjU1M3w&ixlib=rb-4.0.3&q=80&w=400',
//       thumb:
//         'https://images.unsplash.com/photo-1682686581580-d99b0230064e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMzF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NjQyMjU1M3w&ixlib=rb-4.0.3&q=80&w=200',
//       small_s3:
//         'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682686581580-d99b0230064e',
//     },
//     links: {
//       self: 'https://api.unsplash.com/photos/x-F7S_lqN2U',
//       html: 'https://unsplash.com/photos/x-F7S_lqN2U',
//       download:
//         'https://unsplash.com/photos/x-F7S_lqN2U/download?ixid=M3w0NjAwMzF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NjQyMjU1M3w',
//       download_location:
//         'https://api.unsplash.com/photos/x-F7S_lqN2U/download?ixid=M3w0NjAwMzF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NjQyMjU1M3w',
//     },
//     likes: 41,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: {
//       impression_urls: [
//         'https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515670&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif',
//         'https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515873&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif',
//       ],
//       tagline: 'Made to Change',
//       tagline_url:
//         'https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral',
//       sponsor: {
//         id: 'mYizSrdJkkU',
//         updated_at: '2023-06-10T17:43:57Z',
//         username: 'neom',
//         name: 'NEOM',
//         first_name: 'NEOM',
//         last_name: null,
//         twitter_username: 'neom',
//         portfolio_url: 'http://www.neom.com',
//         bio: 'Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.',
//         location: 'NEOM, Saudi Arabia',
//         links: {
//           self: 'https://api.unsplash.com/users/neom',
//           html: 'https://unsplash.com/@neom',
//           photos: 'https://api.unsplash.com/users/neom/photos',
//           likes: 'https://api.unsplash.com/users/neom/likes',
//           portfolio: 'https://api.unsplash.com/users/neom/portfolio',
//           following: 'https://api.unsplash.com/users/neom/following',
//           followers: 'https://api.unsplash.com/users/neom/followers',
//         },
//         profile_image: {
//           small:
//             'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
//           medium:
//             'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
//           large:
//             'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
//         },
//         instagram_username: 'discoverneom',
//         total_collections: 7,
//         total_likes: 0,
//         total_photos: 202,
//         accepted_tos: true,
//         for_hire: false,
//         social: {
//           instagram_username: 'discoverneom',
//           portfolio_url: 'http://www.neom.com',
//           twitter_username: 'neom',
//           paypal_email: null,
//         },
//       },
//     },
//     topic_submissions: {},
//     user: {
//       id: 'mYizSrdJkkU',
//       updated_at: '2023-06-10T17:43:57Z',
//       username: 'neom',
//       name: 'NEOM',
//       first_name: 'NEOM',
//       last_name: null,
//       twitter_username: 'neom',
//       portfolio_url: 'http://www.neom.com',
//       bio: 'Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.',
//       location: 'NEOM, Saudi Arabia',
//       links: {
//         self: 'https://api.unsplash.com/users/neom',
//         html: 'https://unsplash.com/@neom',
//         photos: 'https://api.unsplash.com/users/neom/photos',
//         likes: 'https://api.unsplash.com/users/neom/likes',
//         portfolio: 'https://api.unsplash.com/users/neom/portfolio',
//         following: 'https://api.unsplash.com/users/neom/following',
//         followers: 'https://api.unsplash.com/users/neom/followers',
//       },
//       profile_image: {
//         small:
//           'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
//         medium:
//           'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
//         large:
//           'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
//       },
//       instagram_username: 'discoverneom',
//       total_collections: 7,
//       total_likes: 0,
//       total_photos: 202,
//       accepted_tos: true,
//       for_hire: false,
//       social: {
//         instagram_username: 'discoverneom',
//         portfolio_url: 'http://www.neom.com',
//         twitter_username: 'neom',
//         paypal_email: null,
//       },
//     },
//   },
// ];

const ListCard = React.memo(function ListCard({
  unsplashData,
}: {
  unsplashData: IUnsplashPicture[];
}) {
  return (
    <View className="flex mt-10 flex-row w-auto flex-wrap items-center justify-center">
      {unsplashData.map(data => (
        <Card key={data.id} unsplashData={data} />
      ))}
    </View>
  );
});

export default ListCard;
