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

const PosterPreview = ({ showPoster, eventType, day, date, time, naatKhuans, khatibImage, khatib, address, organization,  isLangerChecked }) => {
  return (
    showPoster && (
      <View style={styles.container}>
        <Text style={styles.salutation}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبیبَ اللّٰهِ</Text>
        <Text style={styles.title}>Mehfil-E-Milad Poster</Text>
        
        {/* <Text style={styles.label}>Event Type:</Text> */}
        <Text style={{textAlign:'center', fontSize: 25,
            color: '#FFFFFF',
            marginBottom: 10,
            fontWeight: '500',
            textTransform: 'capitalize',
            }}>{eventType}
        </Text>
        
         {/* Day, Date, and Time Sections */}
         <View style={styles.infoContainer}>
          <Text style={styles.label}>Day:</Text>
          <Text style={styles.info}>{day}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.info}>{date}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Time:</Text>
          <Text style={styles.info}>{time}</Text>
        </View>

        <View style={styles.naatKhuanContainer}>
          {naatKhuans.map((naatKhuan, index) => (
            <View key={index} style={styles.naatKhuanItem}>
              {naatKhuan.image && <Image source={{ uri: naatKhuan.image }} style={styles.naatKhuanImage} />}
              <Text style={styles.naatlabel}> نعت خواں: </Text>
              <Text style={styles.naatinfo}>{naatKhuan.name}</Text>
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
            <Text style={styles.label}>خطیب:</Text>
            <Text style={styles.info}>{khatib}</Text>
          </View>
        )}

        <Text style={styles.label}>Address:</Text>
        <Text style={styles.info}>{address}</Text>
        <View style={{display:'flex', alignItems:'center'}}>    
            <Text style={styles.label}>Mehfil Organizer:</Text>
            <Text style={styles.info}>{organization}</Text>
        </View>
        {isLangerChecked && (
          <Text style={styles.langerText}>
            {eventType === 'محفل بارھویں' ? 'لنگرِ میلاد کا اہتمام ہے' : 'لنگرِ غوثیہ کا اہتمام ہے۔'}
          </Text>
        )}
      </View>
    )
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: '#000000',
        borderRadius: 25,
        margin: 20,
        borderWidth: 1,
        borderColor: '#FFD700',
        shadowColor: '#FFD700',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 15,
        elevation: 8,
      },
      salutation: {
        fontSize: 34,
        color: '#FFD700',
        textAlign: 'center',
        fontFamily: 'Papyrus',
        fontWeight: '800',
        marginBottom: 15,
        textShadowColor: '#FFFFFF',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 5,
      },
      title: {
        fontSize: 28,
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: 1.5,
        marginBottom: 30,
        borderBottomWidth: 3,
        borderBottomColor: '#FFD700',
        paddingBottom: 12,
      },

      naatlabel: {
        fontSize: 18,
        color: '#FFD700',
        fontWeight: '600',
        marginTop: 10,
      },
      naatinfo: {
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 10,
        fontWeight: '500',
        textTransform: 'capitalize',
      },
      naatKhuanContainer: {
        marginTop: 25,
        marginBottom: 25,
        borderTopWidth: 1,
        borderTopColor: '#FFD700',
        paddingTop: 20,
        flexDirection: 'row', // Arrange children in a row
        flexWrap: 'wrap', // Allow items to wrap onto the next line
        justifyContent: 'flex-start', // Align items to the start of the row
      },
      naatKhuanItem: {
        alignItems: 'center', // Center the items vertically
        marginBottom: 15,
      },
      naatKhuanImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 8, // Space between image and name
        borderWidth: 1,
        borderColor: '#FFD700',
      },

      infoContainer: {
        flexDirection: 'row', // Arrange label and info horizontally
        justifyContent: 'space-between', // Space between label and info
        alignItems: 'center', // Center items vertically
        marginTop: 10,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#FFD700',
      },

      label: {
        fontSize: 18,
        color: '#FFD700',
        fontWeight: '600',
        marginTop: 10,
      },
      info: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '500',
        textTransform: 'capitalize',
      },
      naatKhuanText: {
        fontSize: 18,
        color: '#FFFFFF',
      },
      khatibContainer: {
        alignItems: 'center', // Center the items vertically
        marginTop: 20,
        marginBottom: 25,
      },
      khatibImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10, // Space between image and name
        borderWidth: 2,
        borderColor: '#FFD700',
      },
      langerText: {
        fontSize: 20,
        color: '#FFD700',
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 30,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#FFD700',
      },
});

export default PosterPreview;
