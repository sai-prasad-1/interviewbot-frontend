
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { RadioGroup } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function CreateInterview() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="pb-0">
        <CardTitle className="text-2xl">Job Interview Question Generator</CardTitle>
        <CardDescription>
          Enter the job role, number of questions, and job level to generate interview questions.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid gap-6 px-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="job-role">Job Role</Label>
            <Input id="job-role" placeholder="Enter the job role" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="number-of-questions">Number of Questions</Label>
            <Select defaultValue="5" >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </Select>
          </div>
          <fieldset className="space-y-2" id="job-level">
            <legend className="text-sm font-medium tracking-wide">Job Level</legend>
            <div>
              <RadioGroup value="mid-level" />
            </div>
          </fieldset>
          <div className="space-y-2">
            <Label htmlFor="additional-instructions">Additional Instructions</Label>
            <Textarea
              className="min-h-[100px]"
              id="additional-instructions"
              placeholder="Enter additional instructions"
            />
          </div>
          <Button size="lg">Generate Questions</Button>
        </div>
      </CardContent>
    </Card>
  )
}
