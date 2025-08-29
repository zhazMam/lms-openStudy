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
    <Box sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 4, textAlign: "center", color: "#1b1f23" }}
      >
        📚 Modules
      </Typography>

      {props.modules.map((module) => (
        <ModuleItem
          key={module.id}
          module={module}
          isSelected={module.id === selectedModuleId}
          onSelect={handleSelectModule}
        />
      ))}
    </Box>
  );
};

export default ModuleList;
