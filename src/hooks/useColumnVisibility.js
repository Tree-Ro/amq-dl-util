import { useEffect, useState } from 'react';

/**
 * Custom hook for managing column visibility in a DataGrid.
 *
 * @param {Array} columns - Array of column definitions.
 * @param {Object} defaultVisibility - Default visibility settings for columns.
 * @returns {[Object, Function]} - Current visibility model and a function to update it.
 */
export const useColumnVisibility = (columns, defaultVisibility = {}) => {
  // Initialize column visibility from localStorage or set defaults
  const initializeVisibilityModel = () => {
    const savedModel = localStorage.getItem('columnVisibilityModel');
    if (savedModel) {
      return JSON.parse(savedModel);
    }

    // Create initial visibility model based on columns and default settings
    return columns.reduce((model, col) => {
      model[col.field] = defaultVisibility[col.field] !== undefined 
        ? defaultVisibility[col.field] 
        : true;
      return model;
    }, {});
  };

  const [columnVisibilityModel, setColumnVisibilityModel] = useState(initializeVisibilityModel);

  useEffect(() => {
    localStorage.setItem('columnVisibilityModel', JSON.stringify(columnVisibilityModel));
  }, [columnVisibilityModel]);

  const updateColumnVisibility = (model) => {
    setColumnVisibilityModel((prev) => ({
      ...prev,
      ...model,
    }));
  };

  return [columnVisibilityModel, updateColumnVisibility];
};
