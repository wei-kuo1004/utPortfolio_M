import React from 'react';
import { YStack, H4, Paragraph } from 'tamagui';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <YStack>
      <YStack alignItems="center" marginHorizontal="$6">
        <H4>工作使我快樂</H4>
        <YStack borderRadius="$3" marginVertical="$1">
          <Paragraph>"這個路徑到底怎麼分的"</Paragraph>
        </YStack>
      </YStack>
    </YStack>
  );
}
