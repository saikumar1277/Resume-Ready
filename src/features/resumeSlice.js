import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState={
    name:'',
    gmail:'',
    github:'',
    linkedin:'',
    phonenumber:'',
    education:[],
    skills:[],
    experience:[],
    projects:[],
    certificates:[],
    awards:[]
}

export const resumeslice=createSlice({
    name:'resume',
    initialState,
    reducers:{
        saveName:(state,action)=>{
            const name=action.payload
            state.name=name
        },
        saveGmail:(state,action)=>{
            const gmail=action.payload
            state.gmail=gmail
        },
        savePhoneNumber:(state,action)=>{
            const phonenumber=action.payload
            state.phonenumber=phonenumber
        },
        saveLinkedin:(state,action)=>{
            const linkedin=action.payload
            state.linkedin=linkedin
        },
        saveGithub:(state,action)=>{
            const github=action.payload
            state.github=github
        },
       

        saveEducation:(state,action)=>{
            if(action.payload.id==null){
                state.education.push({...action.payload,id:nanoid()})
            }
            else{
                const updatedEducation = state.education.map(education =>
                    education.id === action.payload.id  ? { ...action.payload } : education
                  );
                  
                state.education=updatedEducation
            }
        },
        saveSkills:(state,action)=>{
            if(action.payload.id==null){
                state.skills.push({...action.payload,id:nanoid()})
            }
            else{
                const updatedskills = state.skills.map(skills =>
                    skills.id === action.payload.id  ? { ...action.payload } : skills
                  );
                  
                state.skills=updatedskills
            }
        },
        saveExperience:(state,action)=>{
            if(action.payload.id==null){
                state.experience.push({...action.payload,id:nanoid()})
            }
            else{
                const updatedexperience = state.experience.map(experience =>
                    experience.id === action.payload.id ? { ...action.payload } : experience
                  );
                  
                state.experience=updatedexperience
            }
        },
        saveCertifications:(state,action)=>{
            state.certificates.push(action.payload)
        },
        saveProjects:(state,action)=>{
            if(action.payload.id==null){
                state.projects.push({...action.payload,id:nanoid()})
            }
            else{
                const updatedProject = state.projects.map(project =>
                    project.id === action.payload.id ? { ...action.payload } : project
                  );
                  
                state.projects=updatedProject
            }
        },
        saveAwards:(state,action)=>{
            state.awards.push(action.payload)
        },
        deleteEducation:(state,action)=>{
            state.education=state.education.filter((edu)=>
                edu.id!==action.payload
            )
        },
        deleteSkills:(state,action)=>{
            state.skills=state.skills.filter((skill)=>
                skill.id!==action.payload
            )
        },
        deleteExperience:(state,action)=>{
            state.experience=state.experience.filter((exp)=>
                exp.id!==action.payload
            )
        },
        deleteCertifications:(state,action)=>{
            state.certificates=state.certificates.filter((pro)=>
                pro.id!==action.payload
            )
        },
        deleteAwards:(state,action)=>{
            state.awards=state.awards.filter((awa)=>
                awa.id!==action.payload
            )
        },
        deleteProjects:(state,action)=>{
            state.projects=state.projects.filter((pro)=>
                pro.id!==action.payload
            )
        }
        
        // removeTodo:(state,action)=>{
        //     state.todo=state.todos.filter((todo)=>
        //     todo.id!==action.payload)
        // }
    }
})

export const {savePhoneNumber,saveProjects,saveGithub,saveName,saveLinkedin,saveSkills,saveGmail,saveAwards,saveCertifications,saveEducation,saveExperience,
    deleteEducation,deleteExperience,deleteSkills,deleteProjects} =resumeslice.actions
export default resumeslice.reducer