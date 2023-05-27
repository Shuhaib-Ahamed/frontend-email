interface AvatarProps {
  size: string;
  url: string;
  last?: boolean;
  length?: number;
  onClick?: any;
}

const Avatar = ({ size, url, last, length, onClick }: AvatarProps) => {
  if (last) {
    return (
      <a
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gray-800 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800"
        href="#"
      >
        +{length}
      </a>
    );
  } else {
    return (
      <img
        onClick={onClick}
        className={"rounded-full transition-all duration-200 " + size}
        src={url}
        alt="Rounded avatar"
      />
    );
  }
};

export default Avatar;
