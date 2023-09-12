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
  const tabStyle = (
    commonInactive: string,
    commonActive: string,
    duoTabInactive: string,
    duoTabActive: string,
    soloTabInactive: string,
    soloTabActive: string,
  ) => {
    if (selectedTab === 'solo') {
      if (tabName === selectedTab) return `${soloTabActive} ${commonActive}`;
      else if (tabName !== selectedTab) return `${soloTabInactive} ${commonInactive}`;
    } else if (selectedTab === 'duo') {
      if (tabName === selectedTab) return `${duoTabActive} ${commonActive}`;
      else if (tabName !== selectedTab) return `${duoTabInactive} ${commonInactive}`;
    }
  };

  return (
    <Button
      onClick={onClick}
      className={classNames(
        `flex w-[38.47%] rounded-[10px_10px_0_0] px-0`,
        `${tabStyle(
          'h-[92.1%] text-main',
          'mb-[-2px] h-[calc(100%+5px)] border-[1px] border-b-[2px] border-b-[transparent] border-b-[transparent] bg-main bg-main',
          'bg-accent-green',
          'border-accent-yellow text-accent-green',
          'bg-accent-yellow',
          'border-accent-green text-accent-green',
        )}`,
      )}
    >
      {tabName}
    </Button>
  );
};

export default RankingTab;
