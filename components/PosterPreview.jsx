// import React from 'react';
// import { View, Text, Image } from 'react-native';

// const PosterPreview = ({ showPoster, eventType, day, date, time, naatKhuans, khatibImage, khatib, address, organization, isLangerChecked }) => {
//   return (
//     showPoster && (
//       <View style={{ padding: 20, backgroundColor: '#f5f5f5', borderRadius: 10, margin: 10 }}>
//         <Text style={{ fontSize: 24, textAlign: 'center' }}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبیبَ اللّٰهِ</Text>
//         <Text style={{ fontSize: 20, textAlign: 'center' }}>Mehfil-E-Milad Poster</Text>
//         <Text style={{ fontSize: 18 }}>Event Type: {eventType}</Text>
//         <Text>Day: {day}</Text>
//         <Text>Date: {date}</Text>
//         <Text>Time: {time}</Text>

//         <View>
//           {naatKhuans.map((naatKhuan, index) => (
//             <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
//               {naatKhuan.image && <Image source={{ uri: naatKhuan.image }} style={{ width: 50, height: 50 }} />}
//               <Text> نعت خواں: {naatKhuan.name}</Text>
//             </View>
//           ))}
//         </View>

//         {khatibImage && <Image source={{ uri: khatibImage }} style={{ width: 100, height: 100 }} />}
//         <Text>خطیب: {khatib}</Text>
//         <Text>Address: {address}</Text>
//         <Text>Mehfil Organizer: {organization}</Text>

//         {isLangerChecked && (
//           <Text>
//             {eventType === 'محفل بارھویں' ? 'لنگرِ میلاد کا اہتمام ہے' : 'لنگرِ غوثیہ کا اہتمام ہے۔'}
//           </Text>
//         )}
//       </View>
//     )
//   );
// };

// export default PosterPreview;


import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PosterPreview = ({ showPoster, eventType, day, date, time, naatKhuans, khatibImage, khatib, address, organization,notes,  isLangerChecked }) => {
  return (
    showPoster && (
      <View style={styles.container}>
        <Text style={styles.salutation}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبیبَ اللّٰهِ</Text>
        <Text style={styles.title}>Mehfil-E-Milad Poster</Text>
        
        {/* <Text style={styles.label}>Event Type:</Text> */}
        <Text style={styles.eventType}>{eventType}
        </Text>
        
         {/* Day, Date, and Time Sections */}
        <View style={styles.infoContainer}>
          <Text style={styles.DayTimeDatelabel}>Day:</Text>
          <Text style={styles.DayTimeDateinfo}>{day}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.DayTimeDatelabel}>Date:</Text>
          <Text style={styles.DayTimeDateinfo}>{date}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.DayTimeDatelabel}>Time:</Text>
          <Text style={styles.DayTimeDateinfo}>{time}</Text>
        </View>

        <View style={styles.naatKhuanContainer}>
          {naatKhuans.map((naatKhuan, index) => (
            <View key={index} style={styles.naatKhuanItem}>
              {naatKhuan.image && <Image source={{ uri: naatKhuan.image }} style={styles.naatKhuanImage} />}
              <Text style={styles.naatLabel}> نعت خواں: </Text>
              <Text style={styles.naatInfo}>{naatKhuan.name}</Text>
            </View>
          ))}
        </View>

        {/* {khatibImage && <Image source={{ uri: khatibImage }} style={styles.khatibImage} />}
        <Text style={styles.label}>خطیب:</Text>
        <Text style={styles.info}>{khatib}</Text> */}

         {/* Khatib Section */}
         {khatibImage && (
          <View style={styles.khatibContainer}>
            <Image source={{ uri: khatibImage }} style={styles.khatibImage} />
            <Text style={styles.KhatibLabel}>خطیب:</Text>
            <Text style={styles.KhatibInfo}>{khatib}</Text>
          </View>
        )}
      <View style={styles.addressContainer}>
        <Text style={styles.addressLabel}>Address:</Text>
        <Text style={styles.addressInfo}> {address}</Text>
      </View>
        
        <View style={styles.organizerContainer}>    
            <Text style={styles.label}>Mehfil Organizer: </Text>
            <Text style={styles.info}> {organization}</Text>
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
            <Text style={styles.info}> {notes}</Text>
        </View>

        <Text style={styles.footerText}>Develop By Shoaib Raza</Text>

      </View>
    )
  );
};

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#FDF6E3', // Soft Cream for a warm background
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
    borderColor: '#D3D3D3', // Light Gray
},
salutation: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 6,
    color: '#5B3F8D', // Deep Plum
    fontFamily: 'Arial',
    fontWeight: '600',
},
title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 6,
    fontWeight: 'bold',
    color: '#5B3F8D', // Deep Plum
    fontFamily: 'Arial',
},
eventType: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFFFFF', // White for text
    marginBottom: 10,
    fontWeight: '500',
    textTransform: 'capitalize',
    backgroundColor: '#5B3F8D', // Deep Plum for background
    padding: 8,
    borderRadius: 5,
},
infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingHorizontal: 5,
},
DayTimeDatelabel: {
    fontWeight: 'bold',
    fontSize: 10,
    color: '#5B3F8D', // Deep Plum
    fontFamily: 'Arial',
},
DayTimeDateinfo: {
    fontSize: 12,
    color: '#7D7D7D', // Slate Gray
},
label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff', // Deep Plum
    fontFamily: 'Arial',
},
info: {
    fontSize: 16,
    color: '#ffff', // Slate Gray
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

naatKhuanContainer: {
    marginVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#5B3F8D', // Deep Plum
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
    color: '#5B3F8D', // Deep Plum
},
naatInfo: {
    fontSize: 11,
    color: '#7D7D7D', // Slate Gray
},
khatibContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
},
khatibImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
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

  // container: {
  //     backgroundColor: '#F8F9FA', // Light background color
  //     borderRadius: 20,
  //     padding: 20,
  //     margin: 10,
  //     shadowColor: '#000',
  //     shadowOffset: {
  //         width: 0,
  //         height: 4,
  //     },
  //     shadowOpacity: 0.3,
  //     shadowRadius: 6,
  //     elevation: 5,
  //     borderWidth: 1,
  //     borderColor: '#CED4DA', // Modern border color
  // },
  // salutation: {
  //     fontSize: 22,
  //     textAlign: 'center',
  //     marginBottom: 10,
  //     color: '#495057', // Dark text color
  //     fontFamily: 'Helvetica Neue, Arial', // Modern font family
  //     fontWeight: '600',
  // },
  // title: {
  //     fontSize: 30,
  //     textAlign: 'center',
  //     marginBottom: 15,
  //     fontWeight: 'bold',
  //     color: '#343A40',
  //     fontFamily: 'Helvetica Neue, Arial',
  // },
  // eventType: {
  //     textAlign: 'center',
  //     fontSize: 24,
  //     color: '#FFFFFF', // White text
  //     marginBottom: 10,
  //     fontWeight: '500',
  //     textTransform: 'capitalize',
  //     backgroundColor: '#007BFF', // Modern blue color
  //     padding: 10,
  //     borderRadius: 5,
  // },
  // infoContainer: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     marginBottom: 10,
  //     paddingHorizontal: 10,
  // },
  // label: {
  //     fontWeight: 'bold',
  //     fontSize: 16,
  //     color: '#007BFF', // Blue color for labels
  //     fontFamily: 'Helvetica Neue, Arial',
  // },
  // info: {
  //     fontSize: 16,
  //     color: '#495057', // Dark text color
  // },
  // naatKhuanContainer: {
  //     marginVertical: 10,
  //     borderTopWidth: 1,
  //     borderTopColor: '#007BFF',
  //     paddingTop: 10,
  // },
  // naatKhuanItem: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     marginBottom: 5,
  // },
  // naatKhuanImage: {
  //     width: 40,
  //     height: 40,
  //     borderRadius: 20,
  //     marginRight: 10,
  // },
  // naatLabel: {
  //     fontWeight: 'bold',
  //     color: '#007BFF',
  // },
  // naatInfo: {
  //     fontSize: 16,
  //     color: '#495057',
  // },
  // khatibContainer: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     marginVertical: 10,
  // },
  // khatibImage: {
  //     width: 40,
  //     height: 40,
  //     borderRadius: 20,
  //     marginRight: 10,
  // },
  // organizerContainer: {
  //     alignItems: 'center',
  //     marginVertical: 10,
  // },
  // langerText: {
  //     fontSize: 16,
  //     color: '#FF5733', // Color for the langer text
  //     fontWeight: 'bold',
  //     textAlign: 'center',
  //     marginTop: 10,
  // },
  // notesContainer: {
  //     alignItems: 'center',
  //     marginTop: 10,
  // },
});

export default PosterPreview;
