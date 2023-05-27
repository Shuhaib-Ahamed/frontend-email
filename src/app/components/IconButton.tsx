interface IconButtonProps {
  icon?: any;
  onClick?: any;
}

export default function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <button
      className="rounded-full border border-gray-800 p-2 transition-all duration-200 hover:bg-gray-800 hover:text-gray-50"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
