import Modal from "./modal";
import CoursePage from "@/app/academy/[id]/page";

export default async function CourseModal(
  { params }: {
    params: Promise<{ id: string }>
  }) {
  return (
    <Modal>
      <CoursePage params={params} />
    </Modal>
  )
}