import { Button } from '@nextui-org/react';
import classNames from 'classnames';

interface Props {
  onClick: () => void;
  tabName: string;
  selectedTab: string;
}

const RankingTab: ({ onClick, selectedTab, tabName }: Props) => JSX.Element = ({
  onClick,
  selectedTab,
  tabName,
}) => {
  const tabStyle = (inactive: string, active: string) => {
    return tabName === selectedTab ? active : inactive;
  };

  return (
    <Button
      onClick={onClick}
      className={classNames(
        `flex w-[38.47%] rounded-[10px_10px_0_0] px-0`,
        `${tabStyle(
          'h-[92.1%] bg-accent-yellow text-main',
          'mb-[-2px] h-[calc(100%+5px)] border-[1px] border-b-[2px] border-accent-green border-b-[transparent] bg-main text-accent-green',
        )}`,
      )}
    >
      {tabName}
    </Button>
  );
};

export default RankingTab;
