import { Box } from '@mui/material';
import { Document,Font, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import {useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

import timesNormal from './Times.ttf'
import timesBold from './Times ExtraBold.ttf'
Font.register({
  family: 'MyFont',
  fonts: [
    { src: timesNormal, fontWeight: 'normal' },
    { src: timesBold, fontWeight: 'bold' },
  ],
});
// Create styles
const styles = StyleSheet.create({
  
  page: {
    
  },
  nameView:{
    textAlign:'center',
    marginTop: '15px',
  },
  name:{
    fontSize:'18px',
    fontFamily:'MyFont',
    fontWeight: 'bold',
    
  },
  contactView:{
    textAlign:'center',
    flexDirection:'row',
    justifyContent:'center'
   
  },
  headingText:{
    fontSize:'16px',
    fontFamily:'MyFont',
    fontWeight: 'bold',
  },
  subheadingText:{
    fontSize:'14px',
    fontFamily:'MyFont',
    fontWeight: 'bold',
    paddingRight:'3px'
  },
  subheadingNormalText:{
    fontSize:'14px',
    fontFamily:'MyFont',
    fontWeight: 'normal',
    paddingRight:'3px'
  },
  pointsText:{
    fontSize:'12px',
    fontFamily:'MyFont',
    fontWeight: 'normal',
  },
  contact:{
    fontSize:'12px',
    fontFamily:'MyFont',
    fontWeight: 'normal',
    paddingHorizontal:'3px'
  },
  bodywrap:{
    margin:'10px'
  },
  educationView:{
    paddingBottom:'4px'
    

  },
  education:{
    fontSize:'16px',
    fontFamily:'MyFont',
    fontWeight: 'bold',
    borderBottom:'2px solid black',
    marginBottom:'2px'

  },
  universityName:{

  },
  field:{

  },
  gpa:{

  },
  enddate:{

  },
  wholewrap:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  firstpartwrap:{
    flexDirection:'row',
    justifyContent:'space-evenly'
    
  },
  skills:{

  },
  experience:{

  },
  projects:{

  },
 
});


// Create Document Component
const MyPDF = ({name,gmail,github,linkedin,phonenumber,education,experience,skills,projects}) => (

  <Document style={{width:'794px',height:'1123px'}}>
    <Page size="A4" style={styles.page}>
      <View style={styles.nameView}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.contactView}>
        <Text style={styles.contact}>{gmail}</Text>
        <Text style={styles.contact}>|</Text>
        <Text style={styles.contact}>{phonenumber}</Text>
        <Text style={styles.contact}>|</Text>
        <Text style={styles.contact}>{linkedin}</Text>
        <Text style={styles.contact}>|</Text>
        <Text style={styles.contact}>{github}</Text>
      </View>
      <View style={styles.bodywrap}>
        <View style={styles.educationView}>
          <View style={styles.education}>
            <Text>EDUCATION</Text>
          </View>
          {education.map((edu)=>
          <View>
            <View style={styles.wholewrap}>
              <View style={styles.firstpartwrap}>
               
                <Text style={[styles.universityName,styles.subheadingText]} >{edu.university}</Text>
                <Text style={styles.contact}>|</Text>
                <Text style={[styles.field,styles.subheadingNormalText]} >{edu.degree}</Text>
                
                <Text style={[styles.field,styles.subheadingNormalText]} >{edu.fieldofstudy}</Text>
                <Text style={styles.contact}>|</Text>
                <Text style={[styles.gpa,styles.pointsText]} >GPA :{edu.gpa}</Text>
              </View>
              <View >
                <Text style={[styles.enddate,styles.pointsText]} >{edu.enddate}</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
              <Text>
              <Text style={[styles.pointsText,{textDecoration:'underline'}]}>Coursework</Text>
              <Text style={[styles.pointsText]}> : </Text>
              <Text style={styles.pointsText}>{edu.coursework}</Text></Text>
            </View>
          </View>
          )}

        </View>
     
        <View style={styles.educationView}>
          <View style={styles.education}>
            <Text>SKILLS</Text>
          </View>
          {skills.map((skills)=>
          <View>
            <View style={styles.wholewrap}>
              <View style={styles.firstpartwrap}>
               
                <Text>
                  <Text style={[styles.universityName,styles.subheadingText]} >{skills.subtitle}</Text>
                  <Text style={styles.contact}>: </Text>
                  <Text style={[styles.field,styles.subheadingNormalText]} >{skills.skills}</Text>
                </Text>
                
                
              </View>
              
            </View>
            
          </View>
          )}

        </View>


        <View style={styles.educationView}>
          <View style={styles.education}>
            <Text>EXPERIENCE</Text>
          </View>
          {experience.map((exp)=>
              <View>
              <View style={styles.wholewrap}>
                <View style={styles.firstpartwrap}>
                
                  <Text style={[styles.universityName,styles.subheadingText]} >{exp.role}</Text>
                  <Text style={styles.contact}>|</Text>
                  <Text style={[styles.field,styles.subheadingNormalText]} >{exp.company}</Text>
                  
                  <Text style={[styles.field,styles.subheadingNormalText]} >{exp.location}</Text>
                  
                </View>
                <View flexDirection='row'>
                  <Text>
                  <Text style={[styles.enddate,styles.pointsText]} >{exp.startdate}</Text>
                  <Text style={styles.contact}> to </Text>
                  <Text style={[styles.enddate,styles.pointsText]} >{exp.enddate}</Text></Text>
                </View>
              </View>
              <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
                {exp.points.map((point)=><Text>
                <Text style={[styles.pointsText]}> * </Text>
                <Text style={styles.pointsText}>{point.point}</Text></Text>)}
              </View>
            </View>
          )}

        </View>
        <View style={styles.educationView}>
          <View style={styles.education}>
            <Text>PROJECTS</Text>
          </View>
          {projects.map((pro)=>
              <View>
              <View style={styles.wholewrap}>
                <View style={styles.firstpartwrap}>
                
                  <Text style={[styles.universityName,styles.subheadingText]} >{pro.title}</Text>
                  <Text style={styles.contact}>|</Text>
                  <Text style={[styles.field,styles.subheadingNormalText]} >{pro.github}</Text>
                  
                </View>
                <View flexDirection='row'>
                  <Text>
                  <Text style={[styles.enddate,styles.pointsText]} >{pro.startdate}</Text>
                  <Text style={styles.contact}> to </Text>
                  <Text style={[styles.enddate,styles.pointsText]} >{pro.enddate}</Text></Text>
                </View>
              </View>
              <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                <Text>
                <Text style={[styles.pointsText,{textDecoration:'underline'}]}>Techstack</Text>
                <Text style={[styles.pointsText]}> : </Text>
                <Text style={styles.pointsText}>{pro.techstack}</Text></Text>
            </View>
              <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
                {pro.points.map((point)=><Text>
                <Text style={[styles.pointsText]}> * </Text>
                <Text style={styles.pointsText}>{point.point}</Text></Text>)}
              </View>
            </View>
          )}

        </View>
      </View>
      
    </Page>
  </Document>
 
);



export default MyPDF

