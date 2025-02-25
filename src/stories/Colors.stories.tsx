import { Meta, StoryFn } from '@storybook/react';
import { base } from '../theme/base';
import { darkTheme } from '../theme/dark';
import { lightTheme } from '../theme/light';

const ColorBox = ({ color, name }: { color: string; name: string }) => (
  <div style={{ padding: '10px', margin: '10px', textAlign: 'center' }}>
    <div style={{ marginBottom: '5px', color: '#000' }}>
      {name}: {color}
    </div>
    <div style={{ backgroundColor: color, padding: '20px', color: '#fff' }}></div>
  </div>
);

const ThemeColors = ({ theme, themeName }: { theme: any; themeName: string }) => (
  <div>
    <h2>{themeName} Theme</h2>
    {Object.keys(theme.colors).map((colorKey) => (
      <ColorBox key={colorKey} color={theme.colors[colorKey]} name={colorKey} />
    ))}
  </div>
);

export default {
  title: 'Theme Colors',
} as Meta;

const Template: StoryFn<{ theme: any; themeName: string }> = (args) => <ThemeColors {...args} />;

export const BaseTheme = Template.bind({});
BaseTheme.args = {
  theme: base,
  themeName: 'Base',
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  theme: darkTheme,
  themeName: 'Dark',
};

export const LightTheme = Template.bind({});
LightTheme.args = {
  theme: lightTheme,
  themeName: 'Light',
};
