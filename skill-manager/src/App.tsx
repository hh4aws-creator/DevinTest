import { useState, useEffect } from 'react'
import { Plus, Minus, ChevronLeft, ChevronRight, ArrowUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import './App.css'

interface Skill {
  id: string
  name: string
  level: number
}

type SortType = 'levelDesc' | 'levelAsc' | 'nameDesc' | 'nameAsc'

const SKILL_LEVELS = [
  '知っているレベル',
  '触ったことはある', 
  '調べながら使える',
  '複数案件こなしたことがある',
  '人に教育できる'
]

function App() {
  const [skills, setSkills] = useState<Skill[]>([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [newSkillName, setNewSkillName] = useState('')
  const [sortType, setSortType] = useState<SortType>('levelDesc')

  useEffect(() => {
    const savedSkills = localStorage.getItem('skills')
    if (savedSkills) {
      setSkills(JSON.parse(savedSkills))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('skills', JSON.stringify(skills))
  }, [skills])

  const addSkill = () => {
    if (newSkillName.trim()) {
      const newSkill: Skill = {
        id: Date.now().toString(),
        name: newSkillName.trim(),
        level: 3 // Default level is 3 (調べながら使える)
      }
      setSkills([...skills, newSkill])
      setNewSkillName('')
      setShowAddForm(false)
    }
  }

  const removeSkill = (id: string) => {
    setSkills(skills.filter(skill => skill.id !== id))
  }

  const updateSkillLevel = (id: string, newLevel: number) => {
    if (newLevel >= 1 && newLevel <= 5) {
      setSkills(skills.map(skill => 
        skill.id === id ? { ...skill, level: newLevel } : skill
      ))
    }
  }

  const sortSkills = (skillsToSort: Skill[]) => {
    switch (sortType) {
      case 'levelDesc':
        return [...skillsToSort].sort((a, b) => b.level - a.level)
      case 'levelAsc':
        return [...skillsToSort].sort((a, b) => a.level - b.level)
      case 'nameDesc':
        return [...skillsToSort].sort((a, b) => b.name.localeCompare(a.name))
      case 'nameAsc':
        return [...skillsToSort].sort((a, b) => a.name.localeCompare(b.name))
      default:
        return skillsToSort
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addSkill()
    }
  }

  const sortedSkills = sortSkills(skills)

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          ITエンジニア スキル管理
        </h1>
        
        {/* Controls */}
        <div className="flex flex-wrap gap-4 mb-6 justify-between items-center">
          <Button
            onClick={() => setShowAddForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            スキルを追加
          </Button>
          
          <div className="flex gap-2">
            <Button
              variant={sortType === 'levelDesc' ? 'default' : 'outline'}
              onClick={() => setSortType('levelDesc')}
              size="sm"
            >
              <ArrowUpDown className="w-4 h-4 mr-1" />
              レベル降順
            </Button>
            <Button
              variant={sortType === 'levelAsc' ? 'default' : 'outline'}
              onClick={() => setSortType('levelAsc')}
              size="sm"
            >
              <ArrowUpDown className="w-4 h-4 mr-1" />
              レベル昇順
            </Button>
            <Button
              variant={sortType === 'nameDesc' ? 'default' : 'outline'}
              onClick={() => setSortType('nameDesc')}
              size="sm"
            >
              <ArrowUpDown className="w-4 h-4 mr-1" />
              名前降順
            </Button>
            <Button
              variant={sortType === 'nameAsc' ? 'default' : 'outline'}
              onClick={() => setSortType('nameAsc')}
              size="sm"
            >
              <ArrowUpDown className="w-4 h-4 mr-1" />
              名前昇順
            </Button>
          </div>
        </div>

        {/* Add Skill Form */}
        {showAddForm && (
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="スキル名を入力してください（例: AWS, Linux, Python）"
                  value={newSkillName}
                  onChange={(e) => setNewSkillName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                  autoFocus
                />
                <Button onClick={addSkill} className="bg-green-600 hover:bg-green-700">
                  追加
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setShowAddForm(false)
                    setNewSkillName('')
                  }}
                >
                  キャンセル
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedSkills.map((skill) => (
            <Card key={skill.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 flex-1">
                    {skill.name}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeSkill(skill.id)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                </div>
                
                {/* Skill Level Controls */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => updateSkillLevel(skill.id, skill.level - 1)}
                    disabled={skill.level <= 1}
                    className="p-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`w-6 h-4 border border-gray-300 cursor-pointer ${
                          level <= skill.level 
                            ? 'bg-blue-500' 
                            : 'bg-gray-100'
                        }`}
                        title={SKILL_LEVELS[level - 1]}
                      />
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => updateSkillLevel(skill.id, skill.level + 1)}
                    disabled={skill.level >= 5}
                    className="p-1"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
                
                <p className="text-sm text-gray-600 mt-2">
                  レベル {skill.level}: {SKILL_LEVELS[skill.level - 1]}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {skills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              まだスキルが登録されていません。
            </p>
            <p className="text-gray-400 mt-2">
              「+」ボタンをクリックしてスキルを追加してください。
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
