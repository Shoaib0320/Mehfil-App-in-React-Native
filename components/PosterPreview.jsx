// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';


// const PosterPreview = ({
//   showPoster,
//   eventType,
//   day,
//   date,
//   time,
//   naatKhuans,
//   khatibImage,
//   khatib,
//   address,
//   organization,
//   notes,
//   isLangerChecked,
//   childrenName = '',
//   childrenImage = '',
//   dulhaName = '',
//   dulhaImage = ''
// }) => {
//   return (
//     showPoster && (
//       <View style={styles.container}>
//         <Text style={styles.salutation}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبیبَ اللّٰهِ</Text>
//         <Text style={styles.title}>Mehfil-E-Milad Poster</Text>
//         <Text style={styles.eventType}>{eventType}</Text>

// {/* Event Type Specific Content: Dulha or Children Info */}
// <View style={styles.rowContainer}>
//   {(eventType === 'رسمِ آمین' || eventType === 'شادی خانہ آبادی') && (
//     <>
//       {eventType === 'رسمِ آمین' && childrenName && (
//         <View style={styles.inputContainer}>
//           <Text style={styles.inputLabel}>Children Name: {childrenName}</Text>
//           {childrenImage && <Image source={{ uri: childrenImage }} style={styles.image} />}
//         </View>
//       )}

//       {eventType === 'شادی خانہ آبادی' && dulhaName && (
//         <View style={styles.inputContainer}>
//           <Text style={styles.inputLabel}>Dulha Name: {dulhaName}</Text>
//           {dulhaImage && <Image source={{ uri: dulhaImage }} style={styles.image} />}
//         </View>
//       )}
//     </>
//   )}

//   {/* Day, Date, and Time - This will always render */}
//   <View style={styles.dateTimeColumnContainer}>
//     <View style={styles.infoItem}>
//       <Text style={styles.DayTimeDatelabel}>Day:</Text>
//       <Text style={styles.DayTimeDateinfo}>{day}</Text>
//     </View>
//     <View style={styles.infoItem}>
//       <Text style={styles.DayTimeDatelabel}>Date:</Text>
//       <Text style={styles.DayTimeDateinfo}>{date}</Text>
//     </View>
//     <View style={styles.infoItem}>
//       <Text style={styles.DayTimeDatelabel}>Time:</Text>
//       <Text style={styles.DayTimeDateinfo}>{time}</Text>
//     </View>
//   </View>
// </View>


//         {/* Naat Khuan Section */}
//         <View style={styles.naatKhuanContainer}>
//           {naatKhuans.map((naatKhuan, index) => (
//             <View key={index} style={styles.naatKhuanItem}>
//               {naatKhuan.image && <Image source={{ uri: naatKhuan.image }} style={styles.naatKhuanImage} />}
//               <Text style={styles.naatLabel}>نعت خواں:</Text>
//               <Text style={styles.naatInfo}>{naatKhuan.name}</Text>
//             </View>
//           ))}
//         </View>

//         {/* Khatib Section */}
//         {khatibImage && (
//           <View style={styles.khatibContainer}>
//             <Image source={{ uri: khatibImage }} style={styles.khatibImage} />
//             <Text style={styles.KhatibLabel}>خطیب:</Text>
//             <Text style={styles.KhatibInfo}>{khatib}</Text>
//           </View>
//         )}

//         <View style={styles.addressContainer}>
//           <Text style={styles.addressLabel}>Address: </Text>
//           <Text style={styles.addressInfo}>{address}</Text>
//         </View>

//         <View style={styles.organizerContainer}>
//           <Text style={styles.label}>Mehfil Organizer: </Text>
//           <Text style={styles.info}>{organization}</Text>
//         </View>

//         {/* Langer Information based on Event Type */}
//         {isLangerChecked && eventType === 'محفل بارھویں' && (
//           <Text style={styles.langerText}>لنگرِ میلاد کا اہتمام ہے</Text>
//         )}
//         {isLangerChecked && eventType === 'محفل گیارہویں' && (
//           <Text style={styles.langerText}>لنگرِ غوثیہ کا اہتمام ہے۔</Text>
//         )}

//         <View style={styles.notesContainer}>
//           <Text style={styles.label}>Note: </Text>
//           <Text style={styles.info}>{notes}</Text>
//         </View>

//         <Text style={styles.footerText}>Developed By Shoaib Raza</Text>
//       </View>
//     )
//   );
// };





import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PosterPreview = ({
  showPoster,
  eventType,
  day,
  date,
  time,
  naatKhuans,
  khatibImage,
  khatib,
  address,
  organization,
  notes,
  isLangerChecked,
  childrenData = [],
  dulhaData = []
}) => {
  return (
    showPoster && (
      <View style={styles.container}>
        <Text style={styles.salutation}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ یَا حبیبَ اللّٰهِ</Text>
        <Text style={styles.title}>Mehfil-E-Milad Poster</Text>
        <Text style={styles.eventType}>{eventType}</Text>

        {/* Event Type Specific Content: Dulha or Children Info */}
        <View style={styles.rowContainer}>
          {eventType === 'رسمِ آمین' && childrenData.map((child, index) => (
            <View key={index} style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Children Name {index + 1}: {child.name}</Text>
              {child.image && <Image source={{ uri: child.image }} style={styles.image} />}
            </View>
          ))}

          {eventType === 'شادی خانہ آبادی' && dulhaData.map((dulha, index) => (
            <View key={index} style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Dulha Name {index + 1}: {dulha.name}</Text>
              {dulha.image && <Image source={{ uri: dulha.image }} style={styles.image} />}
            </View>
          ))}

          {/* Day, Date, and Time - This will always render */}
          <View style={styles.dateTimeColumnContainer}>
            <View style={styles.infoItem}>
              <Text style={styles.DayTimeDatelabel}>Day:</Text>
              <Text style={styles.DayTimeDateinfo}>{day}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.DayTimeDatelabel}>Date:</Text>
              <Text style={styles.DayTimeDateinfo}>{date}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.DayTimeDatelabel}>Time:</Text>
              <Text style={styles.DayTimeDateinfo}>{time}</Text>
            </View>
          </View>
        </View>

        {/* Naat Khuan Section */}
        <View style={styles.naatKhuanContainer}>
          {naatKhuans.map((naatKhuan, index) => (
            <View key={index} style={styles.naatKhuanItem}>
              {naatKhuan.image && <Image source={{ uri: naatKhuan.image }} style={styles.naatKhuanImage} />}
              <Text style={styles.naatLabel}>نعت خواں:</Text>
              <Text style={styles.naatInfo}>{naatKhuan.name}</Text>
            </View>
          ))}
        </View>

        {/* Khatib Section */}
        <View style={styles.khatibContainer}>
          {khatibImage && <Image source={{ uri: khatibImage }} style={styles.khatibImage} />}
          <Text style={styles.khatibLabel}>خطیب:</Text>
          <Text style={styles.khatibInfo}>{khatib}</Text>
        </View>

        {/* Address Section */}
        <View style={styles.addressContainer}>
          <Text style={styles.addressLabel}>Address:</Text>
          <Text style={styles.addressInfo}>{address}</Text>
        </View>

        {/* Organization Section */}
          <View style={styles.organizerContainer}>
           <Text style={styles.label}>Mehfil Organizer: </Text>
           <Text style={styles.info}>{organization}</Text>
         </View>

              {/* Langer Information based on Event Type */}
        {isLangerChecked && eventType === 'محفل بارھویں' && (
              <Text style={styles.langerText}>لنگرِ میلاد کا اہتمام ہے</Text>
            )}
            {isLangerChecked && eventType === 'محفل گیارہویں' && (
              <Text style={styles.langerText}>لنگرِ غوثیہ کا اہتمام ہے۔</Text>
            )}

            <View style={styles.notesContainer}>
              <Text style={styles.label}>Note: </Text>
              <Text style={styles.info}>{notes}</Text>
            </View>

            <Text style={styles.footerText}>Developed By Shoaib Raza</Text>
          </View>
    )
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDF6E3',
    borderRadius: 15,
    padding: 15,
    margin: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  salutation: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 6,
    color: '#5B3F8D',
    fontFamily: 'Arial',
    fontWeight: '600',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 6,
    fontWeight: 'bold',
    color: '#5B3F8D',
    fontFamily: 'Arial',
  },
  eventType: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 10,
    fontWeight: '500',
    textTransform: 'capitalize',
    backgroundColor: '#5B3F8D',
    padding: 8,
    borderRadius: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 5,
  },
  inputContainer: {
    flex: 1,
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FDF6E3',
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#5B3F8D',
    marginBottom: 8,
    textAlign: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginTop: 8,
  },
  dateTimeColumnContainer: {
    flexDirection: 'column', // This will ensure Date, Time, and Day are in a column
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  infoItem: {
    alignItems: 'center',
    marginVertical: 5,
  },
  DayTimeDatelabel: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#5B3F8D',
    fontFamily: 'Arial',
  },
  DayTimeDateinfo: {
    fontSize: 14,
    color: '#7D7D7D',
  },
  naatKhuanContainer: {
    marginVertical: 10,
    marginHorizontal:10,
    borderTopWidth: 1,
    borderTopColor: '#5B3F8D',
    paddingTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  naatKhuanItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 10,
    marginTop: 10,
  },
  naatKhuanImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 5,
  },
  naatLabel: {
    fontWeight: 'bold',
    color: '#5B3F8D',
  },
  naatInfo: {
    fontSize: 11,
    color: '#7D7D7D',
  },
 khatibContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 5,
},
khatibImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
},

  KhatibLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#5B3F8D', // Deep Plum
    fontFamily: 'Arial',
  },
  KhatibInfo: {
    fontSize: 16,
    color: '#7D7D7D', // Slate Gray
  },

addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
},
addressLabel: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#5B3F8D', // Deep Plum
    marginLeft: 5,
    fontFamily: 'Arial',
},
addressInfo: {
    fontSize: 16,
    color: '#34495E', // Dark Slate Gray
    backgroundColor: '#FDF6E3', // Soft Cream background for contrast
},
organizerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 15,
    padding: 10,
    backgroundColor: '#5B3F8D',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#D3D3D3', // Light Gray border
},
langerText: {
    fontSize: 16,
    color: '#5B3F8D', // Coral for emphasis
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FDF6E3', // Soft Cream background for contrast
},
notesContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 12,
    padding: 10,
    backgroundColor: '#5B3F8D', 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#D3D3D3', // Light Gray border
},
 
  footerText: {
    fontSize: 10, // A bit larger for a classy look
    textAlign: 'center', // Centered for balance
    color: '#000', // Luxurious muted gold color
    fontWeight: 'bold', // Bold for emphasis
    fontFamily: 'Georgia', // Georgia or any elegant serif font for a formal feel
    paddingVertical: 10, // Adding padding for space around the text
    textShadowRadius: 5, // Softer shadow blur for a VIP feel
    borderTopWidth: 2, // Thin gold top border for elegance
    borderTopColor: '#5B3F8D', // Gold border to match text
    letterSpacing: 1.2, // Slightly increased letter spacing for elegance
    marginTop:10, // Add space above the footer
  },
});


export default PosterPreview;


// const PosterPreview = ({ showPoster, eventType, day, date, time, naatKhuans, khatibImage, khatib, address, organization,notes,  isLangerChecked }) => {
//   return (
//     showPoster && (
//       <View style={styles.container}>
//         <Text style={styles.salutation}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبیبَ اللّٰهِ</Text>
//         <Text style={styles.title}>Mehfil-E-Milad Poster</Text>
        
//         {/* <Text style={styles.label}>Event Type:</Text> */}
//         <Text style={styles.eventType}>{eventType}
//         </Text>
        
//          {/* Day, Date, and Time Sections */}
//         <View style={styles.infoContainer}>
//           <Text style={styles.DayTimeDatelabel}>Day:</Text>
//           <Text style={styles.DayTimeDateinfo}>{day}</Text>
//         </View>
//         <View style={styles.infoContainer}>
//           <Text style={styles.DayTimeDatelabel}>Date:</Text>
//           <Text style={styles.DayTimeDateinfo}>{date}</Text>
//         </View>
//         <View style={styles.infoContainer}>
//           <Text style={styles.DayTimeDatelabel}>Time:</Text>
//           <Text style={styles.DayTimeDateinfo}>{time}</Text>
//         </View>

//         <View style={styles.naatKhuanContainer}>
//           {naatKhuans.map((naatKhuan, index) => (
//             <View key={index} style={styles.naatKhuanItem}>
//               {naatKhuan.image && <Image source={{ uri: naatKhuan.image }} style={styles.naatKhuanImage} />}
//               <Text style={styles.naatLabel}> نعت خواں: </Text>
//               <Text style={styles.naatInfo}>{naatKhuan.name}</Text>
//             </View>
//           ))}
//         </View>

//         {/* {khatibImage && <Image source={{ uri: khatibImage }} style={styles.khatibImage} />}
//         <Text style={styles.label}>خطیب:</Text>
//         <Text style={styles.info}>{khatib}</Text> */}

//          {/* Khatib Section */}
//          {khatibImage && (
//           <View style={styles.khatibContainer}>
//             <Image source={{ uri: khatibImage }} style={styles.khatibImage} />
//             <Text style={styles.KhatibLabel}>خطیب:</Text>
//             <Text style={styles.KhatibInfo}>{khatib}</Text>
//           </View>
//         )}
//       <View style={styles.addressContainer}>
//         <Text style={styles.addressLabel}>Address:</Text>
//         <Text style={styles.addressInfo}> {address}</Text>
//       </View>
        
//         <View style={styles.organizerContainer}>    
//             <Text style={styles.label}>Mehfil Organizer: </Text>
//             <Text style={styles.info}> {organization}</Text>
//         </View>
//                 {/* Langer Information based on Event Type */}
//                  {isLangerChecked && eventType === 'محفل بارھویں' && (
//                     <Text style={styles.langerText}>لنگرِ میلاد کا اہتمام ہے</Text>
//                   )}
//                   {isLangerChecked && eventType === 'محفل گیارہویں' && (
//                     <Text style={styles.langerText}>لنگرِ غوثیہ کا اہتمام ہے۔</Text>
//                   )}
//         <View style={styles.notesContainer}>    
//             <Text style={styles.label}>Note: </Text>
//             <Text style={styles.info}> {notes}</Text>
//         </View>

//         <Text style={styles.footerText}>Develop By Shoaib Raza</Text>

//       </View>
//     )
//   );
// };

// const PosterPreview = ({
//   showPoster,
//   eventType,
//   day,
//   date,
//   time,
//   naatKhuans,
//   khatibImage,
//   khatib,
//   address,
//   organization,
//   notes,
//   isLangerChecked,
//   childrenName = '',
//   childrenImage = '',
//   dulhaName = '',
//   dulhaImage = ''
// }) => {
//   return (
//     showPoster && (
//       <View style={styles.container}>
//         <Text style={styles.salutation}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبیبَ اللّٰهِ</Text>
//         <Text style={styles.title}>Mehfil-E-Milad Poster</Text>
//         <Text style={styles.eventType}>{eventType}</Text>

//         {/* Event Type Specific Content */}
//         {eventType === 'رسمِ آمین' && childrenName && (
//           <View style={styles.inputContainer}>
//             <Text style={styles.inputLabel}>Children's Name: {childrenName}</Text>
//             {childrenImage && <Image source={{ uri: childrenImage }} style={styles.image} />}
//           </View>
//         )}

//         {eventType === 'شادی خانہ آبادی' && dulhaName && (
//           <View style={styles.inputContainer}>
//             <Text style={styles.inputLabel}>Dulha's Name: {dulhaName}</Text>
//             {dulhaImage && <Image source={{ uri: dulhaImage }} style={styles.image} />}
//           </View>
//         )}

//       {/* Day, Date, and Time Sections */}
//       <View style={styles.infoContainer}>
//         <Text style={styles.DayTimeDatelabel}>Day:</Text>
//         <Text style={styles.DayTimeDateinfo}>{day}</Text>
//       </View>
//       <View style={styles.infoContainer}>
//         <Text style={styles.DayTimeDatelabel}>Date:</Text>
//         <Text style={styles.DayTimeDateinfo}>{date}</Text>
//       </View>
//       <View style={styles.infoContainer}>
//         <Text style={styles.DayTimeDatelabel}>Time:</Text>
//         <Text style={styles.DayTimeDateinfo}>{time}</Text>
//       </View>

//       {/* Naat Khuan Section */}
//       <View style={styles.naatKhuanContainer}>
//         {naatKhuans.map((naatKhuan, index) => (
//           <View key={index} style={styles.naatKhuanItem}>
//             {naatKhuan.image && <Image source={{ uri: naatKhuan.image }} style={styles.naatKhuanImage} />}
//             <Text style={styles.naatLabel}>نعت خواں:</Text>
//             <Text style={styles.naatInfo}>{naatKhuan.name}</Text>
//           </View>
//         ))}
//       </View>

//       {/* Khatib Section */}
//       {khatibImage && (
//         <View style={styles.khatibContainer}>
//           <Image source={{ uri: khatibImage }} style={styles.khatibImage} />
//           <Text style={styles.KhatibLabel}>خطیب:</Text>
//           <Text style={styles.KhatibInfo}>{khatib}</Text>
//         </View>
//       )}

//       <View style={styles.addressContainer}>
//         <Text style={styles.addressLabel}>Address:</Text>
//         <Text style={styles.addressInfo}>{address}</Text>
//       </View>

//       <View style={styles.organizerContainer}>
//         <Text style={styles.label}>Mehfil Organizer: </Text>
//         <Text style={styles.info}>{organization}</Text>
//       </View>

//       {/* Langer Information based on Event Type */}
//       {isLangerChecked && eventType === 'محفل بارھویں' && (
//         <Text style={styles.langerText}>لنگرِ میلاد کا اہتمام ہے</Text>
//       )}
//       {isLangerChecked && eventType === 'محفل گیارہویں' && (
//         <Text style={styles.langerText}>لنگرِ غوثیہ کا اہتمام ہے۔</Text>
//       )}

//       <View style={styles.notesContainer}>
//         <Text style={styles.label}>Note: </Text>
//         <Text style={styles.info}>{notes}</Text>
//       </View>

//       <Text style={styles.footerText}>Developed By Shoaib Raza</Text>
//     </View>
//   )
// );
// };


// const styles = StyleSheet.create({

//   container: {
//     backgroundColor: '#FDF6E3', // Soft Cream for a warm background
//     borderRadius: 15,
//     padding: 15,
//     margin: 7,
//     shadowColor: '#000',
//     shadowOffset: {
//         width: 0,
//         height: 5,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 10,
//     elevation: 5,
//     borderWidth: 1,
//     borderColor: '#D3D3D3', // Light Gray
// },
// salutation: {
//     fontSize: 22,
//     textAlign: 'center',
//     marginBottom: 6,
//     color: '#5B3F8D', // Deep Plum
//     fontFamily: 'Arial',
//     fontWeight: '600',
// },
// title: {
//     fontSize: 28,
//     textAlign: 'center',
//     marginBottom: 6,
//     fontWeight: 'bold',
//     color: '#5B3F8D', // Deep Plum
//     fontFamily: 'Arial',
// },
// eventType: {
//     textAlign: 'center',
//     fontSize: 20,
//     color: '#FFFFFF', // White for text
//     marginBottom: 10,
//     fontWeight: '500',
//     textTransform: 'capitalize',
//     backgroundColor: '#5B3F8D', // Deep Plum for background
//     padding: 8,
//     borderRadius: 5,
// },

// inputContainer: {
//   marginVertical: 10, // Reduced margin for compact layout
//   padding: 10, // Slightly reduced padding
//   backgroundColor: '#FDF6E3', // Soft Cream background for consistency
//   borderRadius: 10, // Slightly smaller border radius for a clean look
//   shadowColor: '#000', 
//   shadowOffset: { width: 0, height: 3 }, // Slightly smaller shadow for depth
//   shadowOpacity: 0.2, 
//   shadowRadius: 5, 
//   elevation: 2, // Slightly reduced elevation for a subtle 3D effect
//   borderWidth: 1, 
//   borderColor: '#D3D3D3', // Light Gray to match the overall style
// },
// inputLabel: {
//   fontSize: 18, // Maintain a readable font size
//   fontWeight: '600',
//   color: '#5B3F8D', // Deep Plum to match theme
//   marginBottom: 8, // Slightly reduced space between label and image
//   textAlign: 'center',
// },
// image: {
//   width: 80, // Slightly smaller image for compact view
//   height: 80,
//   borderRadius: 40, // Circular shape for a modern look
//   alignSelf: 'center',
//   marginTop: 8, // Slightly reduced margin for compactness
// },

// infoContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 5,
//     paddingHorizontal: 5,
// },
// DayTimeDatelabel: {
//     fontWeight: 'bold',
//     fontSize: 10,
//     color: '#5B3F8D', // Deep Plum
//     fontFamily: 'Arial',
// },
// DayTimeDateinfo: {
//     fontSize: 12,
//     color: '#7D7D7D', // Slate Gray
// },
// label: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     color: '#fff', // Deep Plum
//     fontFamily: 'Arial',
// },
// info: {
//     fontSize: 16,
//     color: '#ffff', // Slate Gray
// },

// KhatibLabel: {
//   fontWeight: 'bold',
//   fontSize: 16,
//   color: '#5B3F8D', // Deep Plum
//   fontFamily: 'Arial',
// },
// KhatibInfo: {
//   fontSize: 16,
//   color: '#7D7D7D', // Slate Gray
// },

// naatKhuanContainer: {
//     marginVertical: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#5B3F8D', // Deep Plum
//     paddingTop: 10,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
// },
// naatKhuanItem: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginBottom: 5,
//     marginLeft: 10,
//     marginTop: 10,
// },
// naatKhuanImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginBottom: 5,
// },
// naatLabel: {
//     fontWeight: 'bold',
//     color: '#5B3F8D', // Deep Plum
// },
// naatInfo: {
//     fontSize: 11,
//     color: '#7D7D7D', // Slate Gray
// },
// khatibContainer: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginVertical: 10,
// },
// khatibImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
// },
// addressContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
// },
// addressLabel: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     color: '#5B3F8D', // Deep Plum
//     marginLeft: 5,
//     fontFamily: 'Arial',
// },
// addressInfo: {
//     fontSize: 16,
//     color: '#34495E', // Dark Slate Gray
//     backgroundColor: '#FDF6E3', // Soft Cream background for contrast
// },
// organizerContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginVertical: 15,
//     padding: 10,
//     backgroundColor: '#5B3F8D',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//         width: 0,
//         height: 4,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     elevation: 3,
//     borderWidth: 1,
//     borderColor: '#D3D3D3', // Light Gray border
// },
// langerText: {
//     fontSize: 16,
//     color: '#5B3F8D', // Coral for emphasis
//     fontWeight: 'bold',
//     textAlign: 'center',
//     backgroundColor: '#FDF6E3', // Soft Cream background for contrast
// },
// notesContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginTop: 12,
//     padding: 10,
//     backgroundColor: '#5B3F8D', 
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//         width: 0,
//         height: 4,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     elevation: 3,
//     borderWidth: 1,
//     borderColor: '#D3D3D3', // Light Gray border
// },

// footerText: {
//   fontSize: 10, // A bit larger for a classy look
//   textAlign: 'center', // Centered for balance
//   color: '#000', // Luxurious muted gold color
//   fontWeight: 'bold', // Bold for emphasis
//   fontFamily: 'Georgia', // Georgia or any elegant serif font for a formal feel
//   paddingVertical: 10, // Adding padding for space around the text
//   textShadowRadius: 5, // Softer shadow blur for a VIP feel
//   borderTopWidth: 2, // Thin gold top border for elegance
//   borderTopColor: '#5B3F8D', // Gold border to match text
//   letterSpacing: 1.2, // Slightly increased letter spacing for elegance
//   marginTop:10, // Add space above the footer
// },


