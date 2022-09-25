import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { IconSunHigh, IconMoonStars } from '@tabler/icons';

export const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center">
      <ActionIcon
        aria-label={colorScheme === 'dark' ? 'activate-light-theme': 'activate-dark-theme'}
        onClick={() => toggleColorScheme()}
        size="xl"
        sx={(theme) => ({
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
        })}
      >
        {colorScheme === 'dark' ? (
          <IconSunHigh size={20} stroke={1.5} />
        ) : (
          <IconMoonStars size={20} stroke={1.5} />
        )}
      </ActionIcon>
    </Group>
  );
}

