const getGroups = async () => {
    try{
      const res = await fetch('http://localhost:3000/groups')
      if(res.ok){
        const groups = res.json()
        // console.log(res.json())
        return groups
      }
      else {
        throw new error("Error, can't get data")
      }
    }
    catch (error){
      console.log(error)
    }
  }
  

  const deleteGroups= async (deleteId)=>{
    try{
   const res = await fetch(`http://localhost:3000/groups/${deleteId}`,{
     method:'DELETE'
   })
   if(res.ok){
     question.value= question.value.filter((quest)=>{
       return quest.id!==deleteId
     })
   
   }else{
     throw new Error('Error, cannot delete data!!')
   }
   
    }
    catch (err){
   console.log(err)
    }
   }


   let addNewGroups=( async(newGroup)=>{
    // console.log(newQuestion)
    try{
    const res=await fetch('http://localhost:3000/groups',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      //แปลงให้เป็นjsonเพื่อส่งข้อมูลไปที่backend
      body:JSON.stringify({
        // text:newQuestion.text,
        // options:newQuestion.options
        groupName: newGroup.groupName,
        member: newGroup.member
      })
    })
    
    if(res.status===201){
      const addNewQuestions=await res.json()
    question.value.push(addNewQuestions)
    console.log(question.value)
    setCurrentComponent('QuestionManagement')
    }
    // else if(res.status===404){
    
    // }
    else{
      throw Error('cannot add!!')
    }
    }
    catch (err){
    console.log(err)
    }
    })




    let modifyGroups=( async(editQuestions)=>{
      // console.log(editQuestion)
      try{
    const res=await fetch(`http://localhost:5000/questions/${editQuestions.id}`,{
      method:"PUT",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({
        text:editQuestions.text,
        options:editQuestions.options
      })
    })
    
    if(res.status===200){
      const modifyQest=await res.json()
      question.value=question.value.map((quest)=>{
        if(quest.id===modifyQest.id){
          quest.text=modifyQest.text
          quest.options=modifyQest.options
        }
        return quest
      })
    setCurrentComponent('QuestionManagement')
    editQuestion.value=undefined
    // console.log('edit successful')
    }
    // else if(res.status===404){
    
    // }
    else{
      throw Error('cannot add!!')
    }
    }
    catch (err){
    console.log(err)
    }
    })
  
  export { getGroups }
  