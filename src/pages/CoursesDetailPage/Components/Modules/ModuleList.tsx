import { Box, Typography } from "@mui/material";
import type { Module } from "../../../../types"
import ModuleItem from "./ModuleItem"

interface ModuleListProps{
    modules: Module[];
}
const ModuleList=(props:ModuleListProps)=>{
    return <Box>
        <Typography variant="h4">Modules</Typography>
        {props.modules.map((module)=>{
            return (  
            <ModuleItem key={module.id} module={module}/>)
          
        })}
        
    </Box>
}
export default ModuleList