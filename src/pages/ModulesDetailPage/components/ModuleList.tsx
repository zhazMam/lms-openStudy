import { Box, Typography } from "@mui/material";
import type { Module } from "../../../types";
import ModuleItem from "./ModuleItem";
import { useState } from "react";

interface ModuleListProps {
  modules: Module[];
}
const ModuleList = (props: ModuleListProps) => {
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);
  const handleSelectModule = (moduleId: number) => {
    setSelectedModuleId(moduleId === selectedModuleId ? null : moduleId);
  };
  return (
    <Box>
      <Typography variant="h4">Modules</Typography>
      {props.modules.map((module) => {
        return (
          <ModuleItem
            key={module.id}
            module={module}
            isSelected={module.id === selectedModuleId}
            onSelect={handleSelectModule}
          />
        );
      })}
    </Box>
  );
};
export default ModuleList;
