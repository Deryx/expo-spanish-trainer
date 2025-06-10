// components/CategorySelector.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select'; // For better iOS experience
import useFetch from '../../hooks/useFetch';
import VocabularyService from '../../services/VocabularyService';

export type CategoryItem = {
    id: number;
    category: string;
}

interface CategorySelectorProps {
  onCategoryChange: (category: number) => void;
}

interface PickerItem {
  label: string;
  value: number;
}

const CategorySelector = ({ onCategoryChange }: CategorySelectorProps) => {
  const { data: categories, loading, error } = useFetch<CategoryItem>('VocabularyService.getAllCategories');
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(undefined);

  const handleChange = (value: number) => {
    setSelectedCategory(value);
    onCategoryChange(value);
  };

  const pickerItems = categories?.map(category => ({
    label: category.category,
    value: category.id
  })) || [];

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' ? (
        <RNPickerSelect
          onValueChange={handleChange}
          items={pickerItems}
          value={selectedCategory}
          style={pickerSelectStyles}
          placeholder={{}}
        />
      ) : (
        <Picker
          selectedValue={selectedCategory}
          style={styles.picker}
          onValueChange={handleChange}
        >
          <Picker.Item label="Select a category..." value="" />
            {categories?.map((category) => (
              <Picker.Item 
                key={`category-${category.id}`} 
                label={category.category} 
                value={category.id} 
              />
            ))}
        </Picker>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

const pickerSelectStyles = {
  inputIOS: {
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
  },
  inputAndroid: {
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
  },
};

export default CategorySelector;