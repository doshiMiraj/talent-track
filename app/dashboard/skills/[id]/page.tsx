import { skills } from "@/lib/data";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function SkillPage({ params }: Props) {
  const { id } = await params;

  const skill = skills.find((s) => s.id === id);

  if (!skill) notFound();

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-2">Skill Detail</h1>
      <p className="text-lg">{skill.name}</p>
    </div>
  );
}

export async function generateMetaData({ params }: Props) {
  const { id } = await params;
  const skill = skills.find((s) => s.id === id);

  return {
    title: skill ? skill.name : "Skill Not Found",
  };
}
