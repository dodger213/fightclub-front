import Image from "next/image";

interface MemberCardProps {
  avatar: string;
  name: string;
  title?: string;
  note?: string;
}

const MemberCard = ({ member }: { member: MemberCardProps }) => {
  return (
    <div className="w-72 flex flex-col gap-1">
      <div className="h-52 flex justify-center items-end rounded-md bg-[#353731]">
        <Image src={member.avatar} alt="avatar" width={140} height={200} />
      </div>
      <p className="px-4 font-bold">{member.name}</p>
      {member.title && <p className="px-4 text-sm">{member.title}</p>}
      {member.note && <p className="px-4 text-sm">{member.note}</p>}
    </div>
  );
};

export default MemberCard;
