# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Book.destroy_all
Rating.destroy_all

@katie = User.create(username: "Katie", password: "spot1201", password_confirmation: "spot1201")
puts "#{User.count} users created!"


@book1 = Book.create(title: "Eloquent Rage", author: "Brittney Cooper", description:
 "So what if it’s true that Black women are mad as hell? They have the right to be. In the Black feminist
  tradition of Audre Lorde, Brittney Cooper reminds us that anger is a powerful source of energy that can give us the strength to keep on fighting.", img_url: "https://images-na.ssl-images-amazon.com/images/I/41xq-kwWtmL._SX325_BO1,204,203,200_.jpg")
@book2 = Book.create(title: "Klara and the Sun", author: "Kazuo Ishiguro", description: "The first novel by Kazuo Ishiguro since he was awarded the Nobel Prize in Literature tells the story of Klara, an Artificial Friend with outstanding observational qualities, who, from her place in the store, watches carefully the behavior of those who come in to browse, and of those who pass on the street outside. She remains hopeful that a customer will soon choose her.", img_url: "https://images-na.ssl-images-amazon.com/images/I/41L0svyb0sL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg")
@book3 = Book.create(title: "Under A White Sky: The Nature of the Future", author: "Elizabth Kolbert", description: "In Under a White Sky, Elizabeth Kolbert takes a hard look at the new world we are creating. Along the way, she meets biologists who are trying to preserve the world’s rarest fish, which lives in a single tiny pool in the middle of the Mojave; engineers who are turning carbon emissions to stone in Iceland; Australian researchers who are trying to develop a “super coral” that can survive on a hotter globe; and physicists who are contemplating shooting tiny diamonds into the stratosphere to cool the earth.", img_url: "https://images-na.ssl-images-amazon.com/images/I/51Ex4juXgNL._SX329_BO1,204,203,200_.jpg")
@book4 = Book.create(title: "Emma", author: "Jane Austen", description: "Jane Austen has great fun with this novel, teasing at the social mores of her time, where the hunting of a suitable partner is an all-consuming game. Emma Woodhouse is a confident, elitist young woman, whose self-belief leads to a series of romantic misunderstandings as she makes and breaks engagements for her companion Harriet Smith. ", img_url: "https://images-na.ssl-images-amazon.com/images/I/41gIoYSrvBL._SX303_BO1,204,203,200_.jpg")
@book5 = Book.create(title: "I Want to be Where the Normal People Are", author: "Rachel Bloom", description: "Rachel Bloom has felt abnormal and out of place her whole life. In this exploration of what she thinks makes her 'different' she's come to realize that a lot of people also feel this way; even people who she otherwise thought were 'normal'.", img_url: "https://images-na.ssl-images-amazon.com/images/I/51x9WYstwbL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" )
@book6 = Book.create(title: "Believe Me: How Trusting Women Can Change the World", author: "Jessica Valenti, Jaclyn Friedman", description: "What would happen if we believed women? A groundbreaking anthology offers a potent rallying cry and theory of change", img_url: "https://images-na.ssl-images-amazon.com/images/I/51pEpW7WWEL._SX332_BO1,204,203,200_.jpg")
@book7 = Book.create(title: "Post Corona: From Crisis to Opportunity", author: "Scott Galloway", description: "In Post Corona, Galloway outlines the contours of the crisis and the opportunities that lie ahead. Some businesses, like the powerful tech monopolies, will thrive as a result of the disruption. Other industries, like higher education, will struggle to maintain a value proposition that no longer makes sense when we can't stand shoulder to shoulder. And the pandemic has accelerated deeper trends in government and society, exposing a widening gap between our vision of America as a land of opportunity, and the troubling realities of our declining wellbeing.", img_url: "https://images-na.ssl-images-amazon.com/images/I/519c1VwIZ2L._SX329_BO1,204,203,200_.jpg")
@book8 = Book.create(title: "Girl, Woman, Other", author: "Bernardine Evaristo", description: "Girl, Woman, Other is a magnificent portrayal of the intersections of identity and a moving and hopeful story of an interconnected group of Black British women that paints a vivid portrait of the state of contemporary Britain and looks back to the legacy of Britain’s colonial history in Africa and the Caribbean.", img_url: "https://images-na.ssl-images-amazon.com/images/I/51aRUMp8GgL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg")
@book9 = Book.create(title: "Cold Comfort Farm", author: "Stella Gibbons", description: "A hilarious and merciless parody of rural melodramas, Cold Comfort Farm (1932) is one of the best-loved comic novels of all time.", img_url: "https://images-na.ssl-images-amazon.com/images/I/31yqktqRzxL._BO1,204,203,200_.jpg")
@book10 = Book.create(title: "My Sister, The Serial Killer", author: "Oyinkan Braithwaite", description: "Korede’s sister Ayoola is many things: the favorite child, the beautiful one, possibly sociopathic. And now Ayoola’s third boyfriend in a row is dead, stabbed through the heart with Ayoola’s knife. Korede’s practicality is the sisters’ saving grace. She knows the best solutions for cleaning blood (bleach, bleach, and more bleach), the best way to move a body (wrap it in sheets like a mummy), and she keeps Ayoola from posting pictures to Instagram when she should be mourning her “missing” boyfriend. Not that she gets any credit.", img_url: "https://images-na.ssl-images-amazon.com/images/I/51427-YUaXL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg")
@book11 = Book.create(title: "Lolita", author: "Vladimir Nabokov", description: "In 1954 Vladimir Nabokov asked one American publisher to consider 'a firebomb that I have just finished putting together.' The explosive device: Lolita, his morality play about a middle-aged European's obsession with a 12-year-old American girl. Two years later, the New York Times called it 'great art.' Other reviewers staked a higher moral ground (the editor of the London Sunday Express declaring it 'the filthiest book I've ever read'). Since then, the sinuous novel has never ceased to astound. ", img_url: "https://images-na.ssl-images-amazon.com/images/I/41wPn34w3mL._SX322_BO1,204,203,200_.jpg")
@book12 = Book.create(title: "Conversations with RBG", author: "Jeffrey Rosen", description: "In her own words, Ruth Bader Ginsburg offers an intimate look at her life and career, through an extraordinary series of conversations with the head of the National Constitution Center.", img_url: "https://images-na.ssl-images-amazon.com/images/I/412IXS1qNJL._SX329_BO1,204,203,200_.jpg")

puts "#{Book.count} books created!"