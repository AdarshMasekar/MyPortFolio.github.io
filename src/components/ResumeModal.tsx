import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const resumePath = "/resume.pdf"

export default function ResumeModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-sm font-medium">Resume</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Resume</DialogTitle>
        </DialogHeader>
        <div className="relative w-full h-[80vh]">
          <iframe
            src={resumePath}
            className="w-full h-full"
            title="Resume PDF"
          />
          <Button
            onClick={() => window.open(resumePath, '_blank')}
            className="absolute top-2 right-2"
          >
            Download
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
